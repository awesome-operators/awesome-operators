const https = require('https')

const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
    const fileStream = fs.createReadStream('repos.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    let repos = []
    for await (const line of rl) {
        repos.push(line)
    }
    return repos
}


async function queryAll() {
    repos = await processLineByLine();
    console.log(repos)

    let stats = []
    for (const reponame of repos) {
        let stat = await queryRepoStats(reponame)
        stats.push(stat)
    }
    // remove empty
    stats = stats.filter(value => Object.keys(value).length !== 0);
    // sort by stargazers
    stats = stats.sort((a, b) => b.stargazers_count - a.stargazers_count);

    console.log("\n---")
    console.log("| Github | Description | License | Stargazers | Last Update |")
    console.log("|--------|-------------|---------|------------|-------------|")
    stats.forEach(stat => {
        console.log("| [" + stat.full_name + "](https://github.com/" + stat.full_name + ")"
            + " | " + stat.description
            + " | " + stat.license
            + " | " + stat.stargazers_count
            + " | " + stat.updated_at.split('T')[0] + " |")
    });
}

async function queryRepoStats(reponame, cb) {
    return new Promise((resolve, reject) => {

        const options = {
            hostname: 'api.github.com',
            port: 443,
            path: '/repos/' + reponame,
            method: 'GET',
            headers: {
                "User-Agent": "luebken-awesome-operators",
                "Authorization": "token " + process.env.GITHUB_TOKEN
            }
        }
        process.stdout.write(".");
        const req = https.request(options, res => {
            let body = "";
            let status = res.statusCode
            let stats = {}
            res.on("data", (chunk) => {
                body += chunk;
            });

            res.on("end", () => {
                try {
                    let json = JSON.parse(body);
                    if (status == 200) {
                        if (!json.archived) {
                            stats.full_name = json.full_name
                            stats.description = json.description
                            stats.stargazers_count = json.stargazers_count
                            if (json.license)
                                stats.license = json.license.spdx_id
                            stats.updated_at = json.updated_at

                            resolve(stats)
                        } else {
                            //console.log(reponame + " archived")
                            resolve({})
                        }
                    } else {
                        console.log(reponame + " status " + status)
                        resolve({})
                    }
                } catch (error) {
                    console.error(error.message);
                };

            });
        })

        req.on('error', error => {
            console.error(error)
        })

        req.end()

    })

}

queryAll()