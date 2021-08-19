# Awesome Operators in the Wild

This is a fork from https://github.com/operator-framework/awesome-operators
which has been archived.

Operators are Kubernetes native applications. We define native as being both
managed using the Kubernetes APIs via kubectl and ran on Kubernetes as
containers. Operators take advantage of Kubernetes’s extensibility to deliver
the automation advantages of cloud services like provisioning, scaling, and
backup/restore while being able to run anywhere that Kubernetes can run.

This list is built by the community. Have you built or are you using an Operator
that is not listed? Please send a pull request against [repos.txt](repos.txt)
and we will add that Operator to the list. 

| Github | Description | License | Stargazers | Last Update |
|--------|-------------|---------|------------|-------------|
| [rook/rook](https://github.com/rook/rook) | Storage Orchestration for Kubernetes | Apache-2.0 | 8907 | 2021-08-19 |
| [jetstack/cert-manager](https://github.com/jetstack/cert-manager) | Automatically provision and manage TLS certificates in Kubernetes | Apache-2.0 | 7644 | 2021-08-19 |
| [argoproj/argo-cd](https://github.com/argoproj/argo-cd) | Declarative continuous deployment for Kubernetes. | Apache-2.0 | 6700 | 2021-08-19 |
| [fluxcd/flux](https://github.com/fluxcd/flux) | The GitOps Kubernetes operator | Apache-2.0 | 6508 | 2021-08-19 |
| [prometheus-operator/prometheus-operator](https://github.com/prometheus-operator/prometheus-operator) | Prometheus Operator creates/configures/manages Prometheus clusters atop Kubernetes | Apache-2.0 | 6011 | 2021-08-19 |
| [vmware-tanzu/velero](https://github.com/vmware-tanzu/velero) | Backup and migrate Kubernetes applications and their persistent volumes | Apache-2.0 | 5458 | 2021-08-19 |
| [kubevirt/kubevirt](https://github.com/kubevirt/kubevirt) | Kubernetes Virtualization API and runtime in order to define and manage virtual machines. | Apache-2.0 | 2717 | 2021-08-19 |
| [strimzi/strimzi-kafka-operator](https://github.com/strimzi/strimzi-kafka-operator) | Apache Kafka running on Kubernetes | Apache-2.0 | 2551 | 2021-08-19 |
| [zalando/postgres-operator](https://github.com/zalando/postgres-operator) | Postgres operator creates and manages PostgreSQL clusters running in Kubernetes | MIT | 1936 | 2021-08-18 |
| [CrunchyData/postgres-operator](https://github.com/CrunchyData/postgres-operator) | Production PostgreSQL for Kubernetes, from high availability Postgres clusters to full-scale database-as-a-service. | Apache-2.0 | 1881 | 2021-08-19 |
| [openfaas/faas-netes](https://github.com/openfaas/faas-netes) | Serverless on Kubernetes with OpenFaaS | MIT | 1790 | 2021-08-18 |
| [GoogleCloudPlatform/spark-on-k8s-operator](https://github.com/GoogleCloudPlatform/spark-on-k8s-operator) | Kubernetes operator for managing the lifecycle of Apache Spark applications on Kubernetes.  | Apache-2.0 | 1600 | 2021-08-18 |
| [elastic/cloud-on-k8s](https://github.com/elastic/cloud-on-k8s) | Elastic Cloud on Kubernetes | NOASSERTION | 1566 | 2021-08-19 |
| [banzaicloud/bank-vaults](https://github.com/banzaicloud/bank-vaults) | A Vault swiss-army knife: a K8s operator, Go client with automatic token renewal, automatic configuration, multiple unseal options and more. A CLI tool to init, unseal and configure Vault (auth methods, secret engines). Direct secret injection into Pods. | Apache-2.0 | 1436 | 2021-08-18 |
| [flant/shell-operator](https://github.com/flant/shell-operator) | Shell-operator is a tool for running event-driven scripts in a Kubernetes cluster | Apache-2.0 | 1370 | 2021-08-19 |
| [kudobuilder/kudo](https://github.com/kudobuilder/kudo) | Kubernetes Universal Declarative Operator (KUDO) | Apache-2.0 | 936 | 2021-08-19 |
| [kubeflow/tf-operator](https://github.com/kubeflow/tf-operator) | Tools for ML/Tensorflow on Kubernetes. | Apache-2.0 | 935 | 2021-08-19 |
| [FairwindsOps/rbac-manager](https://github.com/FairwindsOps/rbac-manager) | A Kubernetes operator that simplifies the management of Role Bindings and Service Accounts. | Apache-2.0 | 910 | 2021-08-18 |
| [pingcap/tidb-operator](https://github.com/pingcap/tidb-operator) | TiDB operator creates and manages TiDB clusters running in Kubernetes. | Apache-2.0 | 860 | 2021-08-18 |
| [banzaicloud/logging-operator](https://github.com/banzaicloud/logging-operator) | Logging operator for Kubernetes based on Fluentd and Fluentbit | Apache-2.0 | 778 | 2021-08-19 |
| [coreos/vault-operator](https://github.com/coreos/vault-operator) | Run and manage Vault on Kubernetes simply and securely | Apache-2.0 | 754 | 2021-08-16 |
| [spotahome/redis-operator](https://github.com/spotahome/redis-operator) | Redis Operator creates/configures/manages high availability redis with sentinel automatic failover atop Kubernetes. | Apache-2.0 | 725 | 2021-08-18 |
| [jaegertracing/jaeger-operator](https://github.com/jaegertracing/jaeger-operator) | Jaeger Operator for Kubernetes simplifies deploying and running Jaeger on Kubernetes. | Apache-2.0 | 706 | 2021-08-19 |
| [upmc-enterprises/elasticsearch-operator](https://github.com/upmc-enterprises/elasticsearch-operator) | manages elasticsearch clusters | BSD-3-Clause | 662 | 2021-08-17 |
| [bitpoke/mysql-operator](https://github.com/bitpoke/mysql-operator) | Bulletproof MySQL on Kubernetes using Percona Server | Apache-2.0 | 622 | 2021-08-19 |
| [Altinity/clickhouse-operator](https://github.com/Altinity/clickhouse-operator) | The ClickHouse Operator creates, configures and manages ClickHouse clusters running on Kubernetes | Apache-2.0 | 614 | 2021-08-19 |
| [fluxcd/helm-operator](https://github.com/fluxcd/helm-operator) | Successor: https://github.com/fluxcd/helm-controller ��� The Flux Helm Operator, once upon a time a solution for declarative Helming. | Apache-2.0 | 608 | 2021-08-18 |
| [apache/camel-k](https://github.com/apache/camel-k) | Apache Camel K is a lightweight integration platform, born on Kubernetes, with serverless superpowers | Apache-2.0 | 600 | 2021-08-19 |
| [banzaicloud/kafka-operator](https://github.com/banzaicloud/kafka-operator) | Oh no! Yet another Kafka operator for Kubernetes | Apache-2.0 | 543 | 2021-08-19 |
| [minio/operator](https://github.com/minio/operator) | MinIO Operator creates/configures/manages MinIO clusters on Kubernetes | AGPL-3.0 | 503 | 2021-08-19 |
| [nats-io/nats-operator](https://github.com/nats-io/nats-operator) | NATS Operator | Apache-2.0 | 502 | 2021-08-10 |
| [banzaicloud/istio-operator](https://github.com/banzaicloud/istio-operator) | An operator that manages Istio deployments on Kubernetes | Apache-2.0 | 501 | 2021-08-11 |
| [kubedb/operator](https://github.com/kubedb/operator) | KubeDB Operator | NOASSERTION | 433 | 2021-08-18 |
| [jenkinsci/kubernetes-operator](https://github.com/jenkinsci/kubernetes-operator) | Kubernetes native Jenkins Operator | NOASSERTION | 412 | 2021-08-19 |
| [lyft/flinkk8soperator](https://github.com/lyft/flinkk8soperator) | Kubernetes operator that provides control plane for managing Apache Flink applications | Apache-2.0 | 407 | 2021-08-17 |
| [mongodb/mongodb-kubernetes-operator](https://github.com/mongodb/mongodb-kubernetes-operator) | MongoDB Community Kubernetes Operator | NOASSERTION | 385 | 2021-08-19 |
| [kanisterio/kanister](https://github.com/kanisterio/kanister) | An extensible framework for  application-level data management on Kubernetes | Apache-2.0 | 363 | 2021-08-19 |
| [grafana-operator/grafana-operator](https://github.com/grafana-operator/grafana-operator) | An operator for Grafana that installs and manages Grafana instances, Dashboards and Datasources through Kubernetes/OpenShift CRs | Apache-2.0 | 287 | 2021-08-17 |
| [GoogleCloudPlatform/airflow-operator](https://github.com/GoogleCloudPlatform/airflow-operator) | Kubernetes custom controller and CRDs to managing Airflow | Apache-2.0 | 286 | 2021-08-18 |
| [searchlight/icinga-operator](https://github.com/searchlight/icinga-operator) | 🔦 Alerts for Kubernetes | Apache-2.0 | 284 | 2021-08-10 |
| [rabbitmq/cluster-operator](https://github.com/rabbitmq/cluster-operator) | RabbitMQ Cluster Kubernetes Operator | MPL-2.0 | 279 | 2021-08-19 |
| [libopenstorage/stork](https://github.com/libopenstorage/stork) | Stork - Storage Orchestration Runtime for Kubernetes | Apache-2.0 | 273 | 2021-08-18 |
| [jetstack/navigator](https://github.com/jetstack/navigator) | Managed Database-as-a-Service (DBaaS) on Kubernetes | Apache-2.0 | 269 | 2021-07-23 |
| [jetstack/navigator](https://github.com/jetstack/navigator) | Managed Database-as-a-Service (DBaaS) on Kubernetes | Apache-2.0 | 269 | 2021-07-23 |
| [percona/percona-xtradb-cluster-operator](https://github.com/percona/percona-xtradb-cluster-operator) | A Kubernetes Operator for Percona XtraDB Cluster | Apache-2.0 | 268 | 2021-08-19 |
| [k8gb-io/k8gb](https://github.com/k8gb-io/k8gb) | A cloud native Kubernetes Global Balancer | Apache-2.0 | 258 | 2021-08-19 |
| [mongodb/mongodb-enterprise-kubernetes](https://github.com/mongodb/mongodb-enterprise-kubernetes) | MongoDB Enterprise Kubernetes Operator | NOASSERTION | 251 | 2021-08-11 |
| [hashicorp/terraform-k8s](https://github.com/hashicorp/terraform-k8s) | Terraform Cloud Operator for Kubernetes | MPL-2.0 | 248 | 2021-08-09 |
| [datastax/cass-operator](https://github.com/datastax/cass-operator) | The DataStax Kubernetes Operator for Apache Cassandra | Apache-2.0 | 232 | 2021-08-18 |
| [banzaicloud/hpa-operator](https://github.com/banzaicloud/hpa-operator) | Horizontal Pod Autoscaler operator for Kubernetes. Annotate and let the HPA operator do the rest. | Apache-2.0 | 227 | 2021-07-23 |
| [pravega/zookeeper-operator](https://github.com/pravega/zookeeper-operator) | Kubernetes Operator for Zookeeper | Apache-2.0 | 219 | 2021-08-19 |
| [oracle/weblogic-kubernetes-operator](https://github.com/oracle/weblogic-kubernetes-operator) | Oracle Weblogic Server Kubernetes Operator | NOASSERTION | 199 | 2021-08-19 |
| [tektoncd/operator](https://github.com/tektoncd/operator) | Kubernetes operator to manage installation, updation and uninstallation of tektoncd projects (pipeline, …) | Apache-2.0 | 197 | 2021-08-19 |
| [ucloud/redis-cluster-operator](https://github.com/ucloud/redis-cluster-operator) | Redis Cluster Operator creates and manages Redis Clusters atop Kubernetes. | Apache-2.0 | 192 | 2021-08-19 |
| [arangodb/kube-arangodb](https://github.com/arangodb/kube-arangodb) | ArangoDB Kubernetes Operator - Start ArangoDB on Kubernetes in 5min | Apache-2.0 | 162 | 2021-08-19 |
| [scylladb/scylla-operator](https://github.com/scylladb/scylla-operator) | The Kubernetes Operator for ScyllaDB | Apache-2.0 | 161 | 2021-08-19 |
| [GoogleCloudPlatform/elcarro-oracle-operator](https://github.com/GoogleCloudPlatform/elcarro-oracle-operator) | El Carro is a new project that offers a way to run Oracle databases in Kubernetes as a portable, open source, community driven, no vendor lock-in container orchestration system. El Carro provides a powerful declarative API for comprehensive and consistent configuration and deployment as well as for real-time operations and monitoring. | Apache-2.0 | 158 | 2021-08-19 |
| [apache/rocketmq-operator](https://github.com/apache/rocketmq-operator) | Apache RocketMQ Operator | Apache-2.0 | 156 | 2021-08-16 |
| [openshift/hive](https://github.com/openshift/hive) | API driven OpenShift cluster provisioning and management | Apache-2.0 | 155 | 2021-08-18 |
| [AmadeusITGroup/Redis-Operator](https://github.com/AmadeusITGroup/Redis-Operator) | Redis Operator creates/configures/manages Redis clusters atop Kubernetes | MIT | 149 | 2021-07-23 |
| [ucloud/redis-operator](https://github.com/ucloud/redis-operator) | Redis operator build a Highly Available Redis cluster with Sentinel atop Kubernetes | Apache-2.0 | 148 | 2021-08-16 |
| [solo-io/envoy-operator](https://github.com/solo-io/envoy-operator) | Envoy Operator creates/configures/manages Envoy clusters atop Kubernetes | Apache-2.0 | 145 | 2021-08-10 |
| [bitpoke/wordpress-operator](https://github.com/bitpoke/wordpress-operator) | Bitpoke Kubernetes operator for WordPress | Apache-2.0 | 141 | 2021-08-11 |
| [ianlewis/memcached-operator](https://github.com/ianlewis/memcached-operator) | A Kubernetes operator for memcached | Apache-2.0 | 137 | 2021-08-19 |
| [aws/amazon-sagemaker-operator-for-k8s](https://github.com/aws/amazon-sagemaker-operator-for-k8s) | Amazon SageMaker operator for Kubernetes | Apache-2.0 | 130 | 2021-08-15 |
| [isindir/sops-secrets-operator](https://github.com/isindir/sops-secrets-operator) | Kubernetes SOPS secrets operator | MPL-2.0 | 125 | 2021-08-18 |
| [isaaguilar/terraform-operator](https://github.com/isaaguilar/terraform-operator) | A Kubernetes CRD to handle terraform operations | Apache-2.0 | 119 | 2021-08-17 |
| [giantswarm/aws-operator](https://github.com/giantswarm/aws-operator) | Manages Kubernetes clusters running on AWS | Apache-2.0 | 118 | 2021-08-18 |
| [VictoriaMetrics/operator](https://github.com/VictoriaMetrics/operator) | Kubernetes operator for Victoria Metrics | Apache-2.0 | 118 | 2021-08-19 |
| [sapcc/kubernetes-operators](https://github.com/sapcc/kubernetes-operators) | Operators that automate common tasks for managing Openstack on Kubernetes. | Apache-2.0 | 114 | 2021-07-12 |
| [replicatedhq/gatekeeper](https://github.com/replicatedhq/gatekeeper) | Kubernetes Operator to manage Dynamic Admission Controllers using Open Policy Agent | Apache-2.0 | 109 | 2021-07-23 |
| [practo/k8s-worker-pod-autoscaler](https://github.com/practo/k8s-worker-pod-autoscaler) | Kubernetes autoscaler for the workers. Resource is called WPA. Queues Supported: SQS, Beanstalkd. | Apache-2.0 | 108 | 2021-08-04 |
| [radanalyticsio/spark-operator](https://github.com/radanalyticsio/spark-operator) | Operator for managing the Spark clusters on Kubernetes and OpenShift. | Apache-2.0 | 105 | 2021-08-02 |
| [amaizfinance/redis-operator](https://github.com/amaizfinance/redis-operator) | Redis Operator for Kubernetes | Apache-2.0 | 96 | 2021-08-07 |
| [linki/cloudformation-operator](https://github.com/linki/cloudformation-operator) | A Kubernetes operator for managing CloudFormation stacks via a CustomResource | MIT | 94 | 2021-08-03 |
| [Azure/azure-databricks-operator](https://github.com/Azure/azure-databricks-operator) | Kubernetes Operator for Databricks | MIT | 92 | 2021-08-04 |
| [upmc-enterprises/kong-operator](https://github.com/upmc-enterprises/kong-operator) | manages kong clusters | BSD-3-Clause | 87 | 2021-06-04 |
| [ongres/stackgres](https://github.com/ongres/stackgres) | StackGres Operator, Full Stack PostgreSQL on Kubernetes // !! Mirror repository of https://gitlab.com/ongresinc/stackgres, only accept Merge Requests there. | AGPL-3.0 | 81 | 2021-08-19 |
| [Dynatrace/dynatrace-oneagent-operator](https://github.com/Dynatrace/dynatrace-oneagent-operator) | Kubernetes/Openshift Operator for managing Dynatrace OneAgent deployments | Apache-2.0 | 78 | 2021-08-12 |
| [amaizfinance/secreter](https://github.com/amaizfinance/secreter) | Kubernetes operator and CLI tool for encrypting and managing Kubernetes secrets | Apache-2.0 | 68 | 2021-08-11 |
| [maistra/istio-operator](https://github.com/maistra/istio-operator) | null | Apache-2.0 | 67 | 2021-08-18 |
| [habitat-sh/habitat-operator](https://github.com/habitat-sh/habitat-operator) | A Kubernetes operator for Habitat services | Apache-2.0 | 61 | 2021-06-29 |
| [huanwei/rocketmq-operator](https://github.com/huanwei/rocketmq-operator) | Create, operate and scale self-healing RocketMQ clusters on Kubernetes. | Apache-2.0 | 59 | 2021-06-09 |
| [storageos/cluster-operator](https://github.com/storageos/cluster-operator) | cluster-operator creates, configures and helps manage StorageOS cluster on Kubernetes | MIT | 59 | 2021-08-18 |
| [sky-big/pulsar-operator](https://github.com/sky-big/pulsar-operator) | Pulsar Operator creates/configures/manages pulsar clusters atop Kubernetes | MIT | 58 | 2021-07-23 |
| [TykTechnologies/tyk-operator](https://github.com/TykTechnologies/tyk-operator) | Tyk Operator for Kubernetes | MPL-2.0 | 57 | 2021-08-19 |
| [stakater/Konfigurator](https://github.com/stakater/Konfigurator) | A kubernetes operator that dynamically generates and manages app configuration based on kubernetes resources  – [✩Star] if you're using it! | undefined | 55 | 2021-08-12 |
| [streamnative/function-mesh](https://github.com/streamnative/function-mesh) | The serverless framework purpose-built for event streaming applications. | undefined | 49 | 2021-08-19 |
| [banzaicloud/pvc-operator](https://github.com/banzaicloud/pvc-operator) | null | Apache-2.0 | 48 | 2021-04-28 |
| [kloeckner-i/db-operator](https://github.com/kloeckner-i/db-operator) | The DB Operator creates databases and make them available in the cluster via Custom Resource. | Apache-2.0 | 47 | 2021-08-18 |
| [grtl/mysql-operator](https://github.com/grtl/mysql-operator) | Kubernetes Custom Resource for MySQL | Apache-2.0 | 45 | 2021-08-01 |
| [jw-s/redis-operator](https://github.com/jw-s/redis-operator) | Redis operator for Kubernetes | MIT | 45 | 2021-05-25 |
| [banzaicloud/prometheus-jmx-exporter-operator](https://github.com/banzaicloud/prometheus-jmx-exporter-operator) | null | Apache-2.0 | 44 | 2021-06-08 |
| [patoarvizu/kms-vault-operator](https://github.com/patoarvizu/kms-vault-operator) | Kubernetes operator to manage KMS-encrypted Vault secrets | Apache-2.0 | 43 | 2021-08-13 |
| [deepinsight/mxnet-operator](https://github.com/deepinsight/mxnet-operator) | Tools for ML/MXNet on Kubernetes. | Apache-2.0 | 41 | 2021-03-08 |
| [aliyx/tidb-operator](https://github.com/aliyx/tidb-operator) | Tidb-operator creates/configures/manages tidb clusters atop Kubernetes | undefined | 40 | 2020-08-07 |
| [teseraio/ensemble](https://github.com/teseraio/ensemble) | Modular Kubernetes operator to manage the lifecycle of databases | MPL-2.0 | 39 | 2021-08-09 |
| [halkyonio/operator](https://github.com/halkyonio/operator) | Kubernetes Operator simplifying the development of microservices on k8s ! | Apache-2.0 | 39 | 2021-07-20 |
| [eclipse-che/che-operator](https://github.com/eclipse-che/che-operator) | null | EPL-2.0 | 37 | 2021-08-19 |
| [piontec/netperf-operator](https://github.com/piontec/netperf-operator) | Kubernetes operator to measure TCP transmission speed between 2 pods | Apache-2.0 | 37 | 2021-05-27 |
| [application-stacks/runtime-component-operator](https://github.com/application-stacks/runtime-component-operator) | A generic Operator capable of deploying any runtime component image with enterprise QoS and bind it to other services | Apache-2.0 | 35 | 2021-08-18 |
| [falarica/steerd-presto-operator](https://github.com/falarica/steerd-presto-operator) | Kubernetes (K8s) Operator for PrestoDB | Apache-2.0 | 34 | 2021-08-15 |
| [movetokube/postgres-operator](https://github.com/movetokube/postgres-operator) | PostgreSQL operator for Kubernetes | MIT | 34 | 2021-08-08 |
| [movetokube/postgres-operator](https://github.com/movetokube/postgres-operator) | PostgreSQL operator for Kubernetes | MIT | 34 | 2021-08-08 |
| [pravega/pravega-operator](https://github.com/pravega/pravega-operator) | Pravega Kubernetes Operator | Apache-2.0 | 33 | 2021-08-17 |
| [verfio/fortio-operator](https://github.com/verfio/fortio-operator) | Load Testing Operator within the Kubernetes cluster and outside of it. | Apache-2.0 | 29 | 2021-07-15 |
| [Orange-OpenSource/galera-operator](https://github.com/Orange-OpenSource/galera-operator) | Galera Operator automates tasks for managing a Galera cluster in Kubernetes | Apache-2.0 | 29 | 2021-08-03 |
| [paulczar/gcp-cloud-compute-operator](https://github.com/paulczar/gcp-cloud-compute-operator) | gcp operator for kubernetes | Apache-2.0 | 27 | 2021-06-10 |
| [aquasecurity/aqua-operator](https://github.com/aquasecurity/aqua-operator) | The aqua-operator is a group of controllers that runs within a Kubernetes or Openshift cluster that provides a means to deploy and manage Aqua Security cluster and Components. | undefined | 26 | 2021-08-08 |
| [influxdata/influxdb-operator](https://github.com/influxdata/influxdb-operator) | The Kubernetes operator for InfluxDB and the TICK stack. | Apache-2.0 | 25 | 2021-08-08 |
| [eshepelyuk/cmak-operator](https://github.com/eshepelyuk/cmak-operator) | CMAK (prev. Kafka Manager) for Kubernetes | MIT | 24 | 2021-08-05 |
| [travelaudience/aerospike-operator](https://github.com/travelaudience/aerospike-operator) | Manages Aerospike clusters atop Kubernetes, automating their creation and administration. | Apache-2.0 | 23 | 2021-05-27 |
| [personio/newrelic-alert-manager](https://github.com/personio/newrelic-alert-manager) | Kubernetes operator for managing New Relic alerts and dashboards | MIT | 22 | 2021-04-14 |
| [integr8ly/gitea-operator](https://github.com/integr8ly/gitea-operator) | An Operator that installs Gitea | Apache-2.0 | 21 | 2021-06-14 |
| [kube-incubator/redis-operator](https://github.com/kube-incubator/redis-operator) | A redis-operator based on operator-sdk. | Apache-2.0 | 21 | 2021-05-25 |
| [jomkz/rethinkdb-operator](https://github.com/jomkz/rethinkdb-operator) | A Kubernetes operator to manage RethinkDB clusters. | Apache-2.0 | 21 | 2020-09-14 |
| [slok/service-level-operator](https://github.com/slok/service-level-operator) | Manage application's SLI and SLO's easily with the application lifecycle inside a Kubernetes cluster | Apache-2.0 | 20 | 2021-07-06 |
| [Nuance-XINFRA/zookeeper-operator](https://github.com/Nuance-XINFRA/zookeeper-operator) | Kubernetes Operator for Apache Zookeeper | Apache-2.0 | 20 | 2021-06-15 |
| [OpenLiberty/open-liberty-operator](https://github.com/OpenLiberty/open-liberty-operator) | null | EPL-1.0 | 19 | 2021-07-08 |
| [appsody/appsody-operator](https://github.com/appsody/appsody-operator) | An Operator for deploying Appsody based applications to Kubernetes | Apache-2.0 | 18 | 2020-12-15 |
| [dastergon/vegeta-operator](https://github.com/dastergon/vegeta-operator) | Kubernetes Operator for running HTTP load testing scenarios with Vegeta | Apache-2.0 | 18 | 2021-07-13 |
| [nicolai86/couchdb-operator](https://github.com/nicolai86/couchdb-operator) | prototype kubernetes operator for couchDB | undefined | 17 | 2019-05-22 |
| [Juniper/contrail-operator](https://github.com/Juniper/contrail-operator) | Juniper K8s contrail operator | Apache-2.0 | 16 | 2021-07-20 |
| [craftypath/sops-operator](https://github.com/craftypath/sops-operator) | A Kubernetes operator for Mozilla SOPS | Apache-2.0 | 16 | 2021-08-11 |
| [patoarvizu/vault-dynamic-configuration-operator](https://github.com/patoarvizu/vault-dynamic-configuration-operator) | Operator to handle dynamic configuration of https://github.com/banzaicloud/bank-vaults | Apache-2.0 | 16 | 2021-05-21 |
| [python/consul-operator](https://github.com/python/consul-operator) | A kubernetes operator for consul | undefined | 14 | 2021-04-23 |
| [lukasz-antoniak/neo4j-operator](https://github.com/lukasz-antoniak/neo4j-operator) | Kubernetes Neo4J Operator | Apache-2.0 | 14 | 2021-04-01 |
| [blackducksoftware/opssight-connector](https://github.com/blackducksoftware/opssight-connector) | OpsSight Connector documentation | Apache-2.0 | 14 | 2020-09-14 |
| [geritol/secret-backup-operator](https://github.com/geritol/secret-backup-operator) | Kubernetes operator for backing up secrets | MIT | 14 | 2021-05-13 |
| [skylt/rabbitmq-operator](https://github.com/skylt/rabbitmq-operator) | Rabbitmq operator for kubernetes | MIT | 13 | 2021-02-25 |
| [IBM/ibm-block-csi-operator](https://github.com/IBM/ibm-block-csi-operator) | Operator for IBM block storage CSI driver | Apache-2.0 | 11 | 2021-08-15 |
| [malagoli/oracle-db-operator](https://github.com/malagoli/oracle-db-operator) | A kubernetes operator to manage the lifecycle of an Oracle Container Database | MIT | 11 | 2021-05-21 |
| [lightbend/console-charts](https://github.com/lightbend/console-charts) | Lightbend Console Helm Charts | Apache-2.0 | 11 | 2021-05-06 |
| [disposab1e/sealed-secrets-operator-helm](https://github.com/disposab1e/sealed-secrets-operator-helm) | [DEPRECATED] Sealed Secrets Operator (Helm) installs Sealed Secrets in OpenShift and Kubernetes. | Apache-2.0 | 10 | 2021-06-28 |
| [app-sre/deployment-validation-operator](https://github.com/app-sre/deployment-validation-operator) | The Deployment Validator Operator (DVO) checks deployments and other resources against a curated collection of best practices. | undefined | 9 | 2021-06-02 |
| [didil/autobucket-operator](https://github.com/didil/autobucket-operator) | Cloud Storage Kubernetes Operator with Go and Operator SDK | MIT | 8 | 2021-03-23 |
| [vgkowski/cassandra-operator](https://github.com/vgkowski/cassandra-operator) | kubernetes operator for cassandra clusters automation | Apache-2.0 | 8 | 2021-08-16 |
| [hazelcast/hazelcast-operator](https://github.com/hazelcast/hazelcast-operator) | null | Apache-2.0 | 8 | 2021-08-05 |
| [interconnectedcloud/qdr-operator](https://github.com/interconnectedcloud/qdr-operator) | null | Apache-2.0 | 8 | 2020-09-25 |
| [kube-incubator/tomcat-operator](https://github.com/kube-incubator/tomcat-operator) | Tomcat operator for Kubernetes | undefined | 8 | 2020-05-01 |
| [krestomatio/m4e-operator](https://github.com/krestomatio/m4e-operator) | Moodle Operator for Kubernetes or OKD (Openshift), based on Ansible Operator SDK. | Apache-2.0 | 5 | 2021-08-17 |
| [whyseco/mailgun-operator](https://github.com/whyseco/mailgun-operator) | Mailgun Operator for kubernetes | MIT | 5 | 2021-03-10 |
| [thatInfrastructureGuy/vaultsync-operator](https://github.com/thatInfrastructureGuy/vaultsync-operator) | Periodically syncs secrets from various Vaults to Kubernetes Secrets.  | Apache-2.0 | 5 | 2021-05-11 |
| [openshift/node-problem-detector-operator](https://github.com/openshift/node-problem-detector-operator) | An operator to run Node Problem Detector on OpenShift | Apache-2.0 | 5 | 2021-06-21 |
| [aerogear-attic/android-sdk-operator](https://github.com/aerogear-attic/android-sdk-operator) | Android SDK kubernetes operator | Apache-2.0 | 4 | 2020-02-14 |
| [deepfabric/elasticell-operator](https://github.com/deepfabric/elasticell-operator) | k8s operator for elasticell | undefined | 4 | 2019-07-08 |
| [camunda-community-hub/zeebe-operator](https://github.com/camunda-community-hub/zeebe-operator) | Zeebe Kubernetes Operator | Apache-2.0 | 4 | 2021-06-01 |
| [openshift/aws-efs-operator](https://github.com/openshift/aws-efs-operator) | Operator to manage AWS EFS on OpenShift | Apache-2.0 | 4 | 2021-08-11 |
| [aceeric/nuxeo-operator](https://github.com/aceeric/nuxeo-operator) | A Go language Nuxeo Operator supporting OpenShift and Kubernetes | Apache-2.0 | 4 | 2021-02-22 |
| [mesosphere/kudo-spark-operator](https://github.com/mesosphere/kudo-spark-operator) | KUDO Spark Operator | Apache-2.0 | 3 | 2021-04-29 |
| [hijak/ghost-operator](https://github.com/hijak/ghost-operator) | Kubernetes Operator for ghost blog | undefined | 2 | 2021-06-02 |
| [aerogear/ups-config-operator](https://github.com/aerogear/ups-config-operator) | null | Apache-2.0 | 2 | 2019-05-24 |
| [janepelladinesh/postgresql-operator](https://github.com/janepelladinesh/postgresql-operator) | null | undefined | 0 | 2019-12-27 |
| [Hyperfoil/horreum-operator](https://github.com/Hyperfoil/horreum-operator) | Operator managing Horreum instance in Openshift | Apache-2.0 | 0 | 2021-08-05 |
| [Hyperfoil/hyperfoil-operator](https://github.com/Hyperfoil/hyperfoil-operator) | Operator for installation in Openshift | undefined | 0 | 2021-04-01 |

Last update: 2021-08-19