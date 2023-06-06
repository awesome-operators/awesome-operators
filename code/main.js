import { request } from 'https';

import { createReadStream, readFile, writeFile } from 'fs';
import { createInterface } from 'readline';


// main
async function queryAll() {
    let repos = await readRepos();
    console.log(repos)

    let stats = []
    for (const reponame of repos) {
        try {
            let stat = await queryRepoStatsFromGithub(reponame)
            stats.push(stat)
        }
        catch (error) {
            console.log("Fatal error")
            console.log(error)
            process.exit(1)
        }
    }
    // remove empty
    stats = stats.filter(value => Object.keys(value).length !== 0);
    // sort by stargazers
    stats = stats.sort((a, b) => b.stargazers_count - a.stargazers_count);

    let statsOutput = "\n"
    statsOutput += "| Github | Description | License | Stargazers | Last Update |\n"
    statsOutput += "|--------|-------------|---------|------------|-------------|\n"
    stats.forEach(stat => {
        statsOutput += "| [" + stat.full_name + "](https://github.com/" + stat.full_name + ")"
            + " | " + stat.description
            + " | " + stat.license
            + " | " + stat.stargazers_count
            + " | " + stat.updated_at.split('T')[0] + " |\n"
    });

    readFile('README-template.md', 'utf8', (err, template) => {
        if (err) {
            console.error('Error while reading file:', err);
        } else {
            writeFile("README.md", template + statsOutput, (err) => {
                if (err)
                    console.log(err);
                else {
                    console.log("File written successfully\n");
                }
            });

        }
    });

}
queryAll()


async function queryRepoStatsFromGithub(reponame, cb) {
    return new Promise((resolve, reject) => {

        const options = {
            hostname: 'api.github.com',
            port: 443,
            path: '/repos/' + reponame,
            method: 'GET',
            headers: {
                "User-Agent": "luebken-awesome-operators",
                "Authorization": "token " + process.env.ACCESS_TOKEN
            }
        }
        process.stdout.write(".");
        const req = request(options, res => {
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
                    } else if (status == 401) {
                        console.log(reponame + " status " + status)
                        reject()
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

async function readRepos() {
    const fileStream = createReadStream('repos.txt');

    const rl = createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    let repos = []
    for await (const line of rl) {
        repos.push(line)
    }
    return repos
}
