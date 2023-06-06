# Awesome Operators in the Wild

This is a fork from https://github.com/operator-framework/awesome-operators
which has been archived.

Operators are Kubernetes native applications. We define native as being both
managed using the Kubernetes APIs via kubectl and ran on Kubernetes as
containers. Operators take advantage of Kubernetes’s extensibility to deliver
the automation advantages of cloud services like provisioning, scaling, and
backup/restore while being able to run anywhere that Kubernetes can run.

This list is built by the community. Have you built or are you using an Operator
that is not listed? Please send a pull request against [repos.txt](repos.txt).

| Github | Description | License | Stargazers | Last Update |
|--------|-------------|---------|------------|-------------|
| [argoproj/argo-cd](https://github.com/argoproj/argo-cd) | Declarative continuous deployment for Kubernetes. | Apache-2.0 | 13225 | 2023-06-06 |
| [rook/rook](https://github.com/rook/rook) | Storage Orchestration for Kubernetes | Apache-2.0 | 11044 | 2023-06-06 |
| [cert-manager/cert-manager](https://github.com/cert-manager/cert-manager) | Automatically provision and manage TLS certificates in Kubernetes | Apache-2.0 | 10415 | 2023-06-06 |
| [openebs/openebs](https://github.com/openebs/openebs) | Leading Open Source Container Attached Storage, built using Cloud Native Architecture, simplifies running Stateful Applications on Kubernetes. | Apache-2.0 | 8143 | 2023-06-06 |
| [prometheus-operator/prometheus-operator](https://github.com/prometheus-operator/prometheus-operator) | Prometheus Operator creates/configures/manages Prometheus clusters atop Kubernetes | Apache-2.0 | 8064 | 2023-06-06 |
| [vmware-tanzu/velero](https://github.com/vmware-tanzu/velero) | Backup and migrate Kubernetes applications and their persistent volumes | Apache-2.0 | 7366 | 2023-06-06 |
| [kedacore/keda](https://github.com/kedacore/keda) |  KEDA is a Kubernetes-based Event Driven Autoscaling component. It provides event driven scale for any container running in Kubernetes  | Apache-2.0 | 6424 | 2023-06-05 |
| [fluxcd/flux2](https://github.com/fluxcd/flux2) | Open and extensible continuous delivery solution for Kubernetes. Powered by GitOps Toolkit. | Apache-2.0 | 4928 | 2023-06-06 |
| [pixie-io/pixie](https://github.com/pixie-io/pixie) | Instant Kubernetes-Native Application Observability | Apache-2.0 | 4625 | 2023-06-06 |
| [kubevirt/kubevirt](https://github.com/kubevirt/kubevirt) | Kubernetes Virtualization API and runtime in order to define and manage virtual machines. | Apache-2.0 | 4135 | 2023-06-06 |
| [strimzi/strimzi-kafka-operator](https://github.com/strimzi/strimzi-kafka-operator) | Apache Kafka® running on Kubernetes | Apache-2.0 | 3867 | 2023-06-05 |
| [zalando/postgres-operator](https://github.com/zalando/postgres-operator) | Postgres operator creates and manages PostgreSQL clusters running in Kubernetes | MIT | 3337 | 2023-06-06 |
| [CrunchyData/postgres-operator](https://github.com/CrunchyData/postgres-operator) | Production PostgreSQL for Kubernetes, from high availability Postgres clusters to full-scale database-as-a-service. | Apache-2.0 | 3295 | 2023-06-05 |
| [open-policy-agent/gatekeeper](https://github.com/open-policy-agent/gatekeeper) | Gatekeeper - Policy Controller for Kubernetes | Apache-2.0 | 3112 | 2023-06-05 |
| [external-secrets/external-secrets](https://github.com/external-secrets/external-secrets) | External Secrets Operator reads information from a third-party service like AWS Secrets Manager and automatically injects the values as Kubernetes Secrets. | Apache-2.0 | 2749 | 2023-06-06 |
| [GoogleCloudPlatform/spark-on-k8s-operator](https://github.com/GoogleCloudPlatform/spark-on-k8s-operator) | Kubernetes operator for managing the lifecycle of Apache Spark applications on Kubernetes.  | Apache-2.0 | 2352 | 2023-06-06 |
| [elastic/cloud-on-k8s](https://github.com/elastic/cloud-on-k8s) | Elastic Cloud on Kubernetes | NOASSERTION | 2220 | 2023-06-06 |
| [openfaas/faas-netes](https://github.com/openfaas/faas-netes) | Serverless Functions For Kubernetes | MIT | 2047 | 2023-05-30 |
| [flant/shell-operator](https://github.com/flant/shell-operator) | Shell-operator is a tool for running event-driven scripts in a Kubernetes cluster | Apache-2.0 | 2024 | 2023-06-06 |
| [banzaicloud/bank-vaults](https://github.com/banzaicloud/bank-vaults) | A Vault swiss-army knife: a K8s operator, Go client with automatic token renewal, automatic configuration, multiple unseal options and more. A CLI tool to init, unseal and configure Vault (auth methods, secret engines). Direct secret injection into Pods. | Apache-2.0 | 1860 | 2023-06-05 |
| [Altinity/clickhouse-operator](https://github.com/Altinity/clickhouse-operator) | The Altinity Operator for ClickHouse creates, configures and manages ClickHouse clusters running on Kubernetes | Apache-2.0 | 1313 | 2023-06-06 |
| [kubeflow/training-operator](https://github.com/kubeflow/training-operator) | Training operators on Kubernetes. | Apache-2.0 | 1258 | 2023-06-06 |
| [FairwindsOps/rbac-manager](https://github.com/FairwindsOps/rbac-manager) | A Kubernetes operator that simplifies the management of Role Bindings and Service Accounts. | Apache-2.0 | 1244 | 2023-06-05 |
| [spotahome/redis-operator](https://github.com/spotahome/redis-operator) | Redis Operator creates/configures/manages high availability redis with sentinel automatic failover atop Kubernetes. | Apache-2.0 | 1226 | 2023-06-05 |
| [reactive-tech/kubegres](https://github.com/reactive-tech/kubegres) | Kubegres is a Kubernetes operator allowing to deploy one or many clusters of PostgreSql instances and manage databases replication, failover and backup. | Apache-2.0 | 1171 | 2023-06-04 |
| [kube-logging/logging-operator](https://github.com/kube-logging/logging-operator) | Logging operator for Kubernetes | Apache-2.0 | 1166 | 2023-06-06 |
| [kudobuilder/kudo](https://github.com/kudobuilder/kudo) | Kubernetes Universal Declarative Operator (KUDO) | Apache-2.0 | 1103 | 2023-05-24 |
| [pingcap/tidb-operator](https://github.com/pingcap/tidb-operator) | TiDB operator creates and manages TiDB clusters running in Kubernetes. | Apache-2.0 | 1103 | 2023-05-31 |
| [minio/operator](https://github.com/minio/operator) | Simple Kubernetes Operator for MinIO clusters :computer: | AGPL-3.0 | 936 | 2023-06-06 |
| [jaegertracing/jaeger-operator](https://github.com/jaegertracing/jaeger-operator) | Jaeger Operator for Kubernetes simplifies deploying and running Jaeger on Kubernetes. | Apache-2.0 | 923 | 2023-06-05 |
| [mongodb/mongodb-kubernetes-operator](https://github.com/mongodb/mongodb-kubernetes-operator) | MongoDB Community Kubernetes Operator | NOASSERTION | 922 | 2023-06-06 |
| [ansible/awx-operator](https://github.com/ansible/awx-operator) | An Ansible AWX operator for Kubernetes built with Operator SDK and Ansible. 🤖 | Apache-2.0 | 905 | 2023-06-05 |
| [bitpoke/mysql-operator](https://github.com/bitpoke/mysql-operator) | Asynchronous MySQL Replication on Kubernetes using Percona Server and Openark's Orchestrator. | Apache-2.0 | 893 | 2023-06-01 |
| [NVIDIA/gpu-operator](https://github.com/NVIDIA/gpu-operator) | NVIDIA GPU Operator creates/configures/manages GPUs atop Kubernetes | Apache-2.0 | 796 | 2023-06-06 |
| [weaveworks/tf-controller](https://github.com/weaveworks/tf-controller) | A GitOps Terraform controller for Kubernetes | MPL-2.0 | 793 | 2023-06-06 |
| [apache/camel-k](https://github.com/apache/camel-k) | Apache Camel K is a lightweight integration platform, born on Kubernetes, with serverless superpowers | Apache-2.0 | 772 | 2023-06-01 |
| [open-telemetry/opentelemetry-operator](https://github.com/open-telemetry/opentelemetry-operator) | Kubernetes Operator for OpenTelemetry Collector | Apache-2.0 | 762 | 2023-06-04 |
| [coreos/vault-operator](https://github.com/coreos/vault-operator) | Run and manage Vault on Kubernetes simply and securely | Apache-2.0 | 760 | 2023-06-04 |
| [banzaicloud/koperator](https://github.com/banzaicloud/koperator) | Oh no! Yet another Apache Kafka operator for Kubernetes | Apache-2.0 | 706 | 2023-06-06 |
| [upmc-enterprises/elasticsearch-operator](https://github.com/upmc-enterprises/elasticsearch-operator) | manages elasticsearch clusters | NOASSERTION | 660 | 2023-05-24 |
| [NetApp/trident](https://github.com/NetApp/trident) | Storage orchestrator for containers | Apache-2.0 | 648 | 2023-06-06 |
| [rabbitmq/cluster-operator](https://github.com/rabbitmq/cluster-operator) | RabbitMQ Cluster Kubernetes Operator | MPL-2.0 | 639 | 2023-06-05 |
| [kanisterio/kanister](https://github.com/kanisterio/kanister) | An extensible framework for  application-level data management on Kubernetes | Apache-2.0 | 631 | 2023-06-06 |
| [k8gb-io/k8gb](https://github.com/k8gb-io/k8gb) | A cloud native Kubernetes Global Balancer | Apache-2.0 | 612 | 2023-06-05 |
| [grafana-operator/grafana-operator](https://github.com/grafana-operator/grafana-operator) | An operator for Grafana that installs and manages Grafana instances, Dashboards and Datasources through Kubernetes/OpenShift CRs | Apache-2.0 | 587 | 2023-06-06 |
| [ongres/stackgres](https://github.com/ongres/stackgres) | StackGres Operator, Full Stack PostgreSQL on Kubernetes // !! Mirror repository of https://gitlab.com/ongresinc/stackgres, only accept Merge Requests there. | AGPL-3.0 | 578 | 2023-06-03 |
| [Azure/azure-service-operator](https://github.com/Azure/azure-service-operator) | Azure Service Operator allows you to create Azure resources using kubectl | MIT | 570 | 2023-06-02 |
| [nats-io/nats-operator](https://github.com/nats-io/nats-operator) | NATS Operator | Apache-2.0 | 559 | 2023-06-02 |
| [jenkinsci/kubernetes-operator](https://github.com/jenkinsci/kubernetes-operator) | Kubernetes native Jenkins Operator | NOASSERTION | 556 | 2023-06-04 |
| [mysql/mysql-operator](https://github.com/mysql/mysql-operator) | MySQL Operator for Kubernetes | NOASSERTION | 550 | 2023-06-02 |
| [kube-green/kube-green](https://github.com/kube-green/kube-green) | A K8s operator to reduce CO2 footprint of your clusters | MIT | 547 | 2023-06-06 |
| [kubernetes-sigs/security-profiles-operator](https://github.com/kubernetes-sigs/security-profiles-operator) | The Kubernetes Security Profiles Operator | Apache-2.0 | 536 | 2023-06-05 |
| [banzaicloud/istio-operator](https://github.com/banzaicloud/istio-operator) | An operator that manages Istio deployments on Kubernetes | Apache-2.0 | 533 | 2023-05-12 |
| [apache/flink-kubernetes-operator](https://github.com/apache/flink-kubernetes-operator) | Apache Flink Kubernetes Operator | Apache-2.0 | 510 | 2023-06-06 |
| [lyft/flinkk8soperator](https://github.com/lyft/flinkk8soperator) | Kubernetes operator that provides control plane for managing Apache Flink applications | Apache-2.0 | 507 | 2023-06-06 |
| [OT-CONTAINER-KIT/redis-operator](https://github.com/OT-CONTAINER-KIT/redis-operator) | A golang based redis operator that will make/oversee Redis standalone/cluster mode setup on top of the Kubernetes. | Apache-2.0 | 485 | 2023-06-02 |
| [percona/percona-xtradb-cluster-operator](https://github.com/percona/percona-xtradb-cluster-operator) | Percona Operator for MySQL based on Percona XtraDB Cluster | Apache-2.0 | 437 | 2023-06-06 |
| [metal3-io/baremetal-operator](https://github.com/metal3-io/baremetal-operator) | Bare metal host provisioning integration for Kubernetes | Apache-2.0 | 431 | 2023-06-04 |
| [hashicorp/terraform-k8s](https://github.com/hashicorp/terraform-k8s) | Terraform Cloud Operator for Kubernetes | MPL-2.0 | 404 | 2023-06-06 |
| [argoproj-labs/argocd-operator](https://github.com/argoproj-labs/argocd-operator) | A Kubernetes operator for managing Argo CD clusters. | Apache-2.0 | 401 | 2023-05-31 |
| [tektoncd/operator](https://github.com/tektoncd/operator) | Kubernetes operator to manage installation, updation and uninstallation of tektoncd projects (pipeline, …) | Apache-2.0 | 359 | 2023-06-05 |
| [libopenstorage/stork](https://github.com/libopenstorage/stork) | Stork - Storage Orchestration Runtime for Kubernetes | Apache-2.0 | 339 | 2023-05-23 |
| [ucloud/redis-cluster-operator](https://github.com/ucloud/redis-cluster-operator) | Redis Cluster Operator creates and manages Redis Clusters atop Kubernetes. | Apache-2.0 | 326 | 2023-06-06 |
| [pravega/zookeeper-operator](https://github.com/pravega/zookeeper-operator) | Kubernetes Operator for Zookeeper | Apache-2.0 | 320 | 2023-05-29 |
| [searchlight/searchlight](https://github.com/searchlight/searchlight) | 🔦 Alerts for Kubernetes | Apache-2.0 | 318 | 2023-04-13 |
| [VictoriaMetrics/operator](https://github.com/VictoriaMetrics/operator) | Kubernetes operator for Victoria Metrics | Apache-2.0 | 301 | 2023-06-02 |
| [isaaguilar/terraform-operator](https://github.com/isaaguilar/terraform-operator) | A Kubernetes CRD to handle terraform operations | Apache-2.0 | 298 | 2023-06-02 |
| [mongodb/mongodb-enterprise-kubernetes](https://github.com/mongodb/mongodb-enterprise-kubernetes) | MongoDB Enterprise Kubernetes Operator | NOASSERTION | 294 | 2023-06-02 |
| [apache/rocketmq-operator](https://github.com/apache/rocketmq-operator) | Apache RocketMQ Operator | Apache-2.0 | 271 | 2023-06-01 |
| [scylladb/scylla-operator](https://github.com/scylladb/scylla-operator) | The Kubernetes Operator for ScyllaDB | Apache-2.0 | 268 | 2023-05-30 |
| [datastax/cass-operator](https://github.com/datastax/cass-operator) | The DataStax Kubernetes Operator for Apache Cassandra | Apache-2.0 | 250 | 2023-05-25 |
| [percona/percona-server-mongodb-operator](https://github.com/percona/percona-server-mongodb-operator) | Percona Operator for MongoDB | Apache-2.0 | 248 | 2023-06-05 |
| [instaclustr/cassandra-operator](https://github.com/instaclustr/cassandra-operator) | Kubernetes operator for Apache Cassandra | Apache-2.0 | 232 | 2023-05-28 |
| [oracle/weblogic-kubernetes-operator](https://github.com/oracle/weblogic-kubernetes-operator) | WebLogic Kubernetes Operator | UPL-1.0 | 232 | 2023-03-26 |
| [cockroachdb/cockroach-operator](https://github.com/cockroachdb/cockroach-operator) | k8s operator for CRDB | Apache-2.0 | 227 | 2023-05-23 |
| [openshift/hive](https://github.com/openshift/hive) | API driven OpenShift cluster provisioning and management | Apache-2.0 | 223 | 2023-05-22 |
| [isindir/sops-secrets-operator](https://github.com/isindir/sops-secrets-operator) | Kubernetes SOPS secrets operator | MPL-2.0 | 222 | 2023-05-31 |
| [arangodb/kube-arangodb](https://github.com/arangodb/kube-arangodb) | ArangoDB Kubernetes Operator - Start ArangoDB on Kubernetes in 5min | Apache-2.0 | 215 | 2023-06-06 |
| [pmem/ndctl](https://github.com/pmem/ndctl) | A "device memory" enabling project encompassing tools and libraries for CXL, NVDIMMs, DAX, memory tiering and other platform memory device topics. | NOASSERTION | 215 | 2023-06-05 |
| [GoogleCloudPlatform/elcarro-oracle-operator](https://github.com/GoogleCloudPlatform/elcarro-oracle-operator) | El Carro is a new project that offers a way to run Oracle databases in Kubernetes as a portable, open source, community driven, no vendor lock-in container orchestration system. El Carro provides a powerful declarative API for comprehensive and consistent configuration and deployment as well as for real-time operations and monitoring. | Apache-2.0 | 210 | 2023-04-28 |
| [ucloud/redis-operator](https://github.com/ucloud/redis-operator) | Redis operator build a Highly Available Redis cluster with Sentinel atop Kubernetes | Apache-2.0 | 199 | 2023-05-09 |
| [streamnative/function-mesh](https://github.com/streamnative/function-mesh) | The serverless framework purpose-built for event streaming applications. | Apache-2.0 | 195 | 2023-04-14 |
| [druid-io/druid-operator](https://github.com/druid-io/druid-operator) | Druid Kubernetes Operator | NOASSERTION | 193 | 2023-06-04 |
| [DataDog/datadog-operator](https://github.com/DataDog/datadog-operator) | Datadog Agent Kubernetes Operator | Apache-2.0 | 192 | 2023-06-05 |
| [bitpoke/wordpress-operator](https://github.com/bitpoke/wordpress-operator) | Bitpoke Kubernetes operator for WordPress | Apache-2.0 | 190 | 2023-05-22 |
| [EnMasseProject/enmasse](https://github.com/EnMasseProject/enmasse) | EnMasse - Self-service messaging on Kubernetes and OpenShift | Apache-2.0 | 189 | 2023-06-06 |
| [cloudflare/origin-ca-issuer](https://github.com/cloudflare/origin-ca-issuer) | null | BSD-3-Clause | 177 | 2023-06-04 |
| [splunk/splunk-operator](https://github.com/splunk/splunk-operator) | Splunk Operator for Kubernetes | NOASSERTION | 172 | 2023-05-25 |
| [TykTechnologies/tyk-operator](https://github.com/TykTechnologies/tyk-operator) | Tyk Operator for Kubernetes | MPL-2.0 | 163 | 2023-06-06 |
| [kubemod/kubemod](https://github.com/kubemod/kubemod) | Universal Kubernetes mutating operator | BSD-3-Clause | 162 | 2023-05-09 |
| [AmadeusITGroup/Redis-Operator](https://github.com/AmadeusITGroup/Redis-Operator) | Redis Operator creates/configures/manages Redis clusters atop Kubernetes | MIT | 159 | 2023-05-22 |
| [percona/percona-postgresql-operator](https://github.com/percona/percona-postgresql-operator) | Percona Operator for PostgreSQL | Apache-2.0 | 157 | 2023-06-05 |
| [solo-io/envoy-operator](https://github.com/solo-io/envoy-operator) | Envoy Operator creates/configures/manages Envoy clusters atop Kubernetes | Apache-2.0 | 153 | 2022-12-20 |
| [knative/operator](https://github.com/knative/operator) | Combined operator for Knative. | Apache-2.0 | 149 | 2023-06-05 |
| [ianlewis/memcached-operator](https://github.com/ianlewis/memcached-operator) | A Kubernetes operator for memcached | Apache-2.0 | 148 | 2023-05-14 |
| [aws/amazon-sagemaker-operator-for-k8s](https://github.com/aws/amazon-sagemaker-operator-for-k8s) | Amazon SageMaker operator for Kubernetes | Apache-2.0 | 146 | 2023-03-16 |
| [radanalyticsio/spark-operator](https://github.com/radanalyticsio/spark-operator) | Operator for managing the Spark clusters on Kubernetes and OpenShift. | Apache-2.0 | 146 | 2023-03-11 |
| [chaosblade-io/chaosblade-operator](https://github.com/chaosblade-io/chaosblade-operator) | chaosblade operator for kubernetes experiments | Apache-2.0 | 142 | 2023-06-02 |
| [k8ssandra/cass-operator](https://github.com/k8ssandra/cass-operator) | The DataStax Kubernetes Operator for Apache Cassandra | Apache-2.0 | 142 | 2023-05-30 |
| [practo/k8s-worker-pod-autoscaler](https://github.com/practo/k8s-worker-pod-autoscaler) | Kubernetes autoscaler for the workers. Resource is called WPA. Queues Supported: SQS, Beanstalkd. | Apache-2.0 | 141 | 2023-05-30 |
| [mariadb-operator/mariadb-operator](https://github.com/mariadb-operator/mariadb-operator) | 🦭 Run and operate MariaDB in a cloud native way | MIT | 135 | 2023-06-06 |
| [tigera/operator](https://github.com/tigera/operator) | Kubernetes operator for installing Calico and Calico Enterprise | Apache-2.0 | 134 | 2023-06-01 |
| [giantswarm/aws-operator](https://github.com/giantswarm/aws-operator) | Manages Kubernetes clusters running on AWS (before Cluster API) | Apache-2.0 | 131 | 2023-05-10 |
| [sapcc/kubernetes-operators](https://github.com/sapcc/kubernetes-operators) | Operators that automate common tasks for managing Openstack on Kubernetes. | Apache-2.0 | 121 | 2023-04-11 |
| [Dynatrace/dynatrace-operator](https://github.com/Dynatrace/dynatrace-operator) | Automate Kubernetes observability with Dynatrace | Apache-2.0 | 120 | 2023-05-31 |
| [kloeckner-i/db-operator](https://github.com/kloeckner-i/db-operator) | The DB Operator creates databases and make them available in the cluster via Custom Resource. | Apache-2.0 | 119 | 2023-06-03 |
| [nmstate/kubernetes-nmstate](https://github.com/nmstate/kubernetes-nmstate) | Declarative node network configuration driven through Kubernetes API. | GPL-2.0 | 119 | 2023-06-02 |
| [kubevirt/hyperconverged-cluster-operator](https://github.com/kubevirt/hyperconverged-cluster-operator) | Operator pattern for managing multi-operator products | Apache-2.0 | 112 | 2023-05-31 |
| [movetokube/postgres-operator](https://github.com/movetokube/postgres-operator) | PostgreSQL operator for Kubernetes | MIT | 111 | 2023-05-25 |
| [SAP/sap-btp-service-operator](https://github.com/SAP/sap-btp-service-operator) | SAP BTP service operator enables developers to connect Kubernetes clusters to SAP BTP accounts and to consume SAP BTP services within the clusters by using Kubernetes native tools. | Apache-2.0 | 109 | 2023-06-06 |
| [redhat-developer/service-binding-operator](https://github.com/redhat-developer/service-binding-operator) | The Service Binding Operator: Connecting Applications with Services, in Kubernetes | Apache-2.0 | 108 | 2023-05-23 |
| [amaizfinance/redis-operator](https://github.com/amaizfinance/redis-operator) | Redis Operator for Kubernetes | Apache-2.0 | 107 | 2023-04-25 |
| [litmuschaos/chaos-operator](https://github.com/litmuschaos/chaos-operator) | chaos engineering via kubernetes operator | Apache-2.0 | 107 | 2023-05-09 |
| [Mellanox/network-operator](https://github.com/Mellanox/network-operator) | Mellanox Network Operator | Apache-2.0 | 105 | 2023-05-24 |
| [quay/quay-operator](https://github.com/quay/quay-operator) | Operator for deploying and managing Quay | Apache-2.0 | 105 | 2023-06-02 |
| [mongodb/mongodb-atlas-kubernetes](https://github.com/mongodb/mongodb-atlas-kubernetes) | MongoDB Atlas Kubernetes Operator - Manage your MongoDB Atlas clusters from Kubernetes | Apache-2.0 | 104 | 2023-05-25 |
| [linki/cloudformation-operator](https://github.com/linki/cloudformation-operator) | A Kubernetes operator for managing CloudFormation stacks via a CustomResource | MIT | 101 | 2023-03-21 |
| [mattermost/mattermost-operator](https://github.com/mattermost/mattermost-operator) | Mattermost Operator for Kubernetes | Apache-2.0 | 94 | 2023-05-01 |
| [quay/container-security-operator](https://github.com/quay/container-security-operator) | Identify image vulnerabilities in Kubernetes pods | Apache-2.0 | 91 | 2023-04-17 |
| [noobaa/noobaa-operator](https://github.com/noobaa/noobaa-operator) | Operator for NooBaa - object data service for hybrid and multi cloud environments :cloud: :wrench: | Apache-2.0 | 90 | 2023-03-14 |
| [upmc-enterprises/kong-operator](https://github.com/upmc-enterprises/kong-operator) | manages kong clusters | NOASSERTION | 89 | 2022-08-27 |
| [Dynatrace/dynatrace-oneagent-operator](https://github.com/Dynatrace/dynatrace-oneagent-operator) | Kubernetes/Openshift Operator for managing Dynatrace OneAgent deployments | Apache-2.0 | 87 | 2022-10-25 |
| [maistra/istio-operator](https://github.com/maistra/istio-operator) | null | Apache-2.0 | 86 | 2023-03-22 |
| [aerospike/aerospike-kubernetes-operator](https://github.com/aerospike/aerospike-kubernetes-operator) | Kubernetes operator for the Aerospike database | Apache-2.0 | 79 | 2023-06-05 |
| [wso2/k8s-api-operator](https://github.com/wso2/k8s-api-operator) | API Operator for Kubernetes | Apache-2.0 | 79 | 2023-03-07 |
| [rabbitmq/messaging-topology-operator](https://github.com/rabbitmq/messaging-topology-operator) | RabbitMQ messaging topology operator | MPL-2.0 | 78 | 2023-05-03 |
| [submariner-io/submariner-operator](https://github.com/submariner-io/submariner-operator) | Submariner's Operator installs and maintains your Submariner deployment. | Apache-2.0 | 78 | 2023-06-03 |
| [stakater/Konfigurator](https://github.com/stakater/Konfigurator) | A kubernetes operator that dynamically generates and manages app configuration based on kubernetes resources  – [✩Star] if you're using it! | undefined | 77 | 2023-06-02 |
| [citrusframework/yaks](https://github.com/citrusframework/yaks) | YAKS is a platform to enable Cloud Native BDD testing on Kubernetes | Apache-2.0 | 75 | 2023-05-22 |
| [influxdata/telegraf-operator](https://github.com/influxdata/telegraf-operator) | telegraf-operator helps monitor application on Kubernetes with Telegraf  | Apache-2.0 | 73 | 2023-03-29 |
| [netobserv/network-observability-operator](https://github.com/netobserv/network-observability-operator) | An OpenShift / Kubernetes operator for network observability | Apache-2.0 | 73 | 2023-05-27 |
| [lightbend/akka-cluster-operator](https://github.com/lightbend/akka-cluster-operator) | Run Akka Cluster applications in Kubernetes. | Apache-2.0 | 71 | 2023-04-20 |
| [sky-big/pulsar-operator](https://github.com/sky-big/pulsar-operator) | Pulsar Operator creates/configures/manages pulsar clusters atop Kubernetes | MIT | 71 | 2023-04-19 |
| [nrvnrvn/secreter](https://github.com/nrvnrvn/secreter) | Kubernetes operator and CLI tool for encrypting and managing Kubernetes secrets | Apache-2.0 | 67 | 2023-02-12 |
| [habitat-sh/habitat-operator](https://github.com/habitat-sh/habitat-operator) | A Kubernetes operator for Habitat services | Apache-2.0 | 62 | 2022-08-27 |
| [digitalocean/do-operator](https://github.com/digitalocean/do-operator) | The Kubernetes Operator for DigitalOcean | Apache-2.0 | 61 | 2023-03-22 |
| [eclipse-che/che-operator](https://github.com/eclipse-che/che-operator) | null | EPL-2.0 | 60 | 2023-05-26 |
| [IBM/varnish-operator](https://github.com/IBM/varnish-operator) | Run and manage Varnish clusters on Kubernetes | Apache-2.0 | 60 | 2023-05-12 |
| [yugabyte/yugabyte-operator](https://github.com/yugabyte/yugabyte-operator) | Kubernetes Operator for YugabyteDB database | undefined | 59 | 2023-05-26 |
| [alexandrevilain/temporal-operator](https://github.com/alexandrevilain/temporal-operator) | Temporal Kubernetes Operator | Apache-2.0 | 58 | 2023-05-30 |
| [kiali/kiali-operator](https://github.com/kiali/kiali-operator) | Kiali operator that is used to install, manage, and update Kiali deployments. | Apache-2.0 | 58 | 2023-06-05 |
| [patoarvizu/kms-vault-operator](https://github.com/patoarvizu/kms-vault-operator) | Kubernetes operator to manage KMS-encrypted Vault secrets | Apache-2.0 | 58 | 2023-02-21 |
| [huanwei/rocketmq-operator](https://github.com/huanwei/rocketmq-operator) | Create, operate and scale self-healing RocketMQ clusters on Kubernetes. | Apache-2.0 | 57 | 2023-01-13 |
| [Kong/kong-operator](https://github.com/Kong/kong-operator) | Kong Operator for Kubernetes and OpenShift | Apache-2.0 | 56 | 2023-04-17 |
| [metallb/metallb-operator](https://github.com/metallb/metallb-operator) | MetalLB Operator for deploying metallb | Apache-2.0 | 54 | 2023-05-29 |
| [banzaicloud/pvc-operator](https://github.com/banzaicloud/pvc-operator) | null | Apache-2.0 | 50 | 2022-11-20 |
| [eshepelyuk/cmak-operator](https://github.com/eshepelyuk/cmak-operator) | CMAK (prev. Kafka Manager) for Kubernetes | MIT | 50 | 2023-05-30 |
| [abalki001/mariadb-operator](https://github.com/abalki001/mariadb-operator) | MariaDB GO based operator | MIT | 48 | 2023-03-03 |
| [grtl/mysql-operator](https://github.com/grtl/mysql-operator) | Kubernetes Custom Resource for MySQL | Apache-2.0 | 48 | 2022-06-26 |
| [application-stacks/runtime-component-operator](https://github.com/application-stacks/runtime-component-operator) | A generic Operator capable of deploying any runtime component image with enterprise QoS and bind it to other services | Apache-2.0 | 47 | 2023-05-23 |
| [jw-s/redis-operator](https://github.com/jw-s/redis-operator) | Redis operator for Kubernetes | MIT | 47 | 2023-03-28 |
| [fossul/fossul](https://github.com/fossul/fossul) | Container Native Backup and Recovery Framework | Apache-2.0 | 46 | 2023-04-05 |
| [banzaicloud/prometheus-jmx-exporter-operator](https://github.com/banzaicloud/prometheus-jmx-exporter-operator) | null | Apache-2.0 | 45 | 2022-10-24 |
| [datainfrahq/druid-operator](https://github.com/datainfrahq/druid-operator) | Apache Druid On Kubernetes | NOASSERTION | 45 | 2023-05-18 |
| [medik8s/node-healthcheck-operator](https://github.com/medik8s/node-healthcheck-operator) | K8s Node Health Check Operator | Apache-2.0 | 45 | 2023-05-28 |
| [falarica/steerd-presto-operator](https://github.com/falarica/steerd-presto-operator) | Kubernetes (K8s) Operator for PrestoDB | Apache-2.0 | 44 | 2023-04-16 |
| [carlosedp/lbconfig-operator](https://github.com/carlosedp/lbconfig-operator) | A Kubernetes/Openshift Operator to configure external Load Balancers | MIT | 43 | 2023-03-23 |
| [devopstales/trivy-operator](https://github.com/devopstales/trivy-operator) | Kubernetes Operator based on the open-source container vulnerability scanner Trivy. | Apache-2.0 | 43 | 2023-05-22 |
| [kubernetes-sigs/node-feature-discovery-operator](https://github.com/kubernetes-sigs/node-feature-discovery-operator) | Operator for managing Node Feature Discovery deployment | Apache-2.0 | 43 | 2023-05-31 |
| [m88i/nexus-operator](https://github.com/m88i/nexus-operator) | Sonatype Nexus OSS Kubernetes Operator based on Operator SDK | Apache-2.0 | 43 | 2023-04-24 |
| [deepinsight/mxnet-operator](https://github.com/deepinsight/mxnet-operator) | Tools for ML/MXNet on Kubernetes. | Apache-2.0 | 42 | 2023-03-14 |
| [OT-CONTAINER-KIT/logging-operator](https://github.com/OT-CONTAINER-KIT/logging-operator) | A golang based operator to create and manage EFK (Elasticsearch, Fluentd, and Kibana) stack on Kubernetes | Apache-2.0 | 42 | 2022-10-15 |
| [IBM/cloud-operators](https://github.com/IBM/cloud-operators) | Provision and bind IBM Cloud services to your Kubernetes cluster in a Kubernetes-native way | Apache-2.0 | 41 | 2022-05-06 |
| [instana/instana-agent-operator](https://github.com/instana/instana-agent-operator) | A Kubernetes operator to install and manage the Instana agent. | Apache-2.0 | 41 | 2023-05-25 |
| [OT-CONTAINER-KIT/mongodb-operator](https://github.com/OT-CONTAINER-KIT/mongodb-operator) | A golang based operator to create and manage MongoDB standalone setup and cluster setup | Apache-2.0 | 41 | 2023-04-25 |
| [teseraio/ensemble](https://github.com/teseraio/ensemble) | Modular Kubernetes operator to manage the lifecycle of databases | MPL-2.0 | 41 | 2022-08-12 |
| [aliyx/tidb-operator](https://github.com/aliyx/tidb-operator) | Tidb-operator creates/configures/manages tidb clusters atop Kubernetes | undefined | 40 | 2020-08-07 |
| [app-sre/deployment-validation-operator](https://github.com/app-sre/deployment-validation-operator) | The Deployment Validator Operator (DVO) checks deployments and other resources against a curated collection of best practices. | undefined | 40 | 2023-03-24 |
| [pingcap/docs-tidb-operator](https://github.com/pingcap/docs-tidb-operator) | Documentation for TiDB on Kubernetes in both English and Chinese. | NOASSERTION | 40 | 2023-03-14 |
| [piontec/netperf-operator](https://github.com/piontec/netperf-operator) | Kubernetes operator to measure TCP transmission speed between 2 pods | Apache-2.0 | 40 | 2022-04-20 |
| [3scale/3scale-operator](https://github.com/3scale/3scale-operator) | Openshift operator to install a 3scale API Management solution | Apache-2.0 | 39 | 2023-05-16 |
| [halkyonio/operator](https://github.com/halkyonio/operator) | Kubernetes Operator simplifying the development of microservices on k8s ! | Apache-2.0 | 39 | 2023-03-21 |
| [ipfs-cluster/ipfs-operator](https://github.com/ipfs-cluster/ipfs-operator) | null | undefined | 39 | 2023-05-25 |
| [pravega/pravega-operator](https://github.com/pravega/pravega-operator) | Pravega Kubernetes Operator | Apache-2.0 | 39 | 2023-03-17 |
| [confluentinc/operator-earlyaccess](https://github.com/confluentinc/operator-earlyaccess) | Confluent Operator Early Access docs | Apache-2.0 | 38 | 2022-12-14 |
| [infinispan/infinispan-operator](https://github.com/infinispan/infinispan-operator) | Infinispan Operator | Apache-2.0 | 37 | 2023-05-15 |
| [openshift/service-ca-operator](https://github.com/openshift/service-ca-operator) | Controller to mint and manage serving certificates for Kubernetes services | Apache-2.0 | 36 | 2023-01-23 |
| [pulp/pulp-operator](https://github.com/pulp/pulp-operator) | Kubernetes Operator for Pulp 3. Under active development. | GPL-2.0 | 36 | 2023-04-06 |
| [verfio/fortio-operator](https://github.com/verfio/fortio-operator) | Load Testing Operator within the Kubernetes cluster and outside of it. | Apache-2.0 | 36 | 2023-03-21 |
| [aquasecurity/aqua-operator](https://github.com/aquasecurity/aqua-operator) | The aqua-operator is a group of controllers that runs within a Kubernetes or Openshift cluster that provides a means to deploy and manage Aqua Security cluster and Components. | undefined | 31 | 2022-11-15 |
| [libopenstorage/operator](https://github.com/libopenstorage/operator) | Storage operator for Kubernetes | undefined | 31 | 2023-05-13 |
| [slok/service-level-operator](https://github.com/slok/service-level-operator) | Manage application's SLI and SLO's easily with the application lifecycle inside a Kubernetes cluster | Apache-2.0 | 31 | 2023-03-09 |
| [Apicurio/apicurio-registry-operator](https://github.com/Apicurio/apicurio-registry-operator) | The Kubernetes Operator for Apicurio Registry. | Apache-2.0 | 30 | 2023-05-30 |
| [CrowdStrike/falcon-operator](https://github.com/CrowdStrike/falcon-operator) | null | Apache-2.0 | 30 | 2023-05-09 |
| [dastergon/vegeta-operator](https://github.com/dastergon/vegeta-operator) | Kubernetes Operator for running HTTP load testing scenarios with Vegeta | Apache-2.0 | 30 | 2022-10-18 |
| [wildfly/wildfly-operator](https://github.com/wildfly/wildfly-operator) | Kubernetes Operator for WildFly | Apache-2.0 | 30 | 2023-03-13 |
| [cryostatio/cryostat-operator](https://github.com/cryostatio/cryostat-operator) | A Kubernetes Operator to facilitate the setup and management of Cryostat. | UPL-1.0 | 29 | 2023-05-25 |
| [mondoohq/mondoo-operator](https://github.com/mondoohq/mondoo-operator) | ☸️ Mondoo Client Kubernetes Operator | MPL-2.0 | 29 | 2023-05-28 |
| [dev4devs-com/postgresql-operator](https://github.com/dev4devs-com/postgresql-operator) | Operator in Go developed using the Operator Framework to package, install, configure and manage a PostgreSQL database. | Apache-2.0 | 28 | 2023-04-20 |
| [paulczar/gcp-cloud-compute-operator](https://github.com/paulczar/gcp-cloud-compute-operator) | gcp operator for kubernetes | Apache-2.0 | 28 | 2021-11-12 |
| [vertica/vertica-kubernetes](https://github.com/vertica/vertica-kubernetes) | Operator, container and Helm chart to deploy Vertica in Kubernetes | Apache-2.0 | 28 | 2023-05-29 |
| [Carrefour-Group/elastic-phenix-operator](https://github.com/Carrefour-Group/elastic-phenix-operator) | elastic-phenix-operator is a kubernetes operator to manage elasticsearch resources: Indices, Templates, ... | Apache-2.0 | 27 | 2023-03-14 |
| [OpenLiberty/open-liberty-operator](https://github.com/OpenLiberty/open-liberty-operator) | null | EPL-1.0 | 27 | 2023-03-27 |
| [Jooho/nfs-provisioner-operator](https://github.com/Jooho/nfs-provisioner-operator) | NFS Provisioner Go Operator | Apache-2.0 | 26 | 2023-06-02 |
| [kube-incubator/redis-operator](https://github.com/kube-incubator/redis-operator) | A redis-operator based on operator-sdk. | Apache-2.0 | 26 | 2022-11-22 |
| [kedacore/keda-olm-operator](https://github.com/kedacore/keda-olm-operator) | Operator for deploying KEDA Controller on OperatorHub.io/OLM | Apache-2.0 | 25 | 2023-05-23 |
| [mysql/mysql-ndb-operator](https://github.com/mysql/mysql-ndb-operator) | Kubernetes Operator for MySQL NDB Cluster. | NOASSERTION | 25 | 2023-05-24 |
| [travelaudience/aerospike-operator](https://github.com/travelaudience/aerospike-operator) | Manages Aerospike clusters atop Kubernetes, automating their creation and administration. | Apache-2.0 | 25 | 2022-07-26 |
| [craftypath/sops-operator](https://github.com/craftypath/sops-operator) | A Kubernetes operator for Mozilla SOPS | Apache-2.0 | 24 | 2023-04-10 |
| [personio/newrelic-alert-manager](https://github.com/personio/newrelic-alert-manager) | Kubernetes operator for managing New Relic alerts and dashboards | MIT | 23 | 2022-10-31 |
| [microcks/microcks-ansible-operator](https://github.com/microcks/microcks-ansible-operator) | Kubernetes Operator for easy setup and management of Microcks installs | Apache-2.0 | 22 | 2023-05-11 |
| [jomkz/rethinkdb-operator](https://github.com/jomkz/rethinkdb-operator) | A Kubernetes operator to manage RethinkDB clusters. | Apache-2.0 | 21 | 2023-03-17 |
| [wso2/k8s-wso2am-operator](https://github.com/wso2/k8s-wso2am-operator) | WSO2 API Manager Operator for Kubernetes | Apache-2.0 | 21 | 2023-04-05 |
| [aiven/aiven-operator](https://github.com/aiven/aiven-operator) | Provision and manage Aiven Services from your Kubernetes cluster. | Apache-2.0 | 20 | 2023-04-24 |
| [dell/dell-csi-operator](https://github.com/dell/dell-csi-operator) | A repo for the CSI operator for all Dell storage arrays | NOASSERTION | 20 | 2023-05-27 |
| [medik8s/self-node-remediation](https://github.com/medik8s/self-node-remediation) | Automatic repair for unhealthy Kubernetes nodes | Apache-2.0 | 20 | 2023-05-31 |
| [hazelcast/hazelcast-platform-operator](https://github.com/hazelcast/hazelcast-platform-operator) | Easily deploy Hazelcast clusters and Management Center into Kubernetes/OpenShift environments and manage their lifecycles. | Apache-2.0 | 19 | 2023-05-03 |
| [lukasz-antoniak/neo4j-operator](https://github.com/lukasz-antoniak/neo4j-operator) | Kubernetes Neo4J Operator | Apache-2.0 | 19 | 2023-04-13 |
| [Nuance-XINFRA/zookeeper-operator](https://github.com/Nuance-XINFRA/zookeeper-operator) | Kubernetes Operator for Apache Zookeeper | Apache-2.0 | 19 | 2023-04-18 |
| [routernetes/routernetes-operator](https://github.com/routernetes/routernetes-operator) | null | Apache-2.0 | 19 | 2023-05-02 |
| [appsody/appsody-operator](https://github.com/appsody/appsody-operator) | An Operator for deploying Appsody based applications to Kubernetes. This repo will be archived soon. | Apache-2.0 | 18 | 2023-05-03 |
| [grafana/tempo-operator](https://github.com/grafana/tempo-operator) | Grafana Tempo Kubernetes operator | AGPL-3.0 | 18 | 2023-06-05 |
| [Juniper/contrail-operator](https://github.com/Juniper/contrail-operator) | Juniper K8s contrail operator | Apache-2.0 | 18 | 2023-05-26 |
| [patoarvizu/vault-dynamic-configuration-operator](https://github.com/patoarvizu/vault-dynamic-configuration-operator) | Operator to handle dynamic configuration of https://github.com/banzaicloud/bank-vaults | Apache-2.0 | 18 | 2023-02-13 |
| [openshift/kubefed-operator](https://github.com/openshift/kubefed-operator) | Operator for Kubefed | Apache-2.0 | 16 | 2022-06-29 |
| [blackducksoftware/opssight-connector](https://github.com/blackducksoftware/opssight-connector) | OpsSight Connector documentation | Apache-2.0 | 15 | 2023-03-05 |
| [IBM/ibm-block-csi-operator](https://github.com/IBM/ibm-block-csi-operator) | Operator for IBM block storage CSI driver | Apache-2.0 | 15 | 2023-03-05 |
| [opdev/synapse-operator](https://github.com/opdev/synapse-operator) | null | Apache-2.0 | 15 | 2023-06-03 |
| [che-incubator/kubernetes-image-puller-operator](https://github.com/che-incubator/kubernetes-image-puller-operator) | null | EPL-2.0 | 14 | 2023-04-28 |
| [gp42/aws-auth-operator](https://github.com/gp42/aws-auth-operator) | Kubernetes operator to manage aws-auth ConfigMap for AWS EKS | Apache-2.0 | 14 | 2022-12-22 |
| [open-accelerators/mercury](https://github.com/open-accelerators/mercury) | Journey to open platform for digital bank modernization. A reference implementation of BIAN to start, providing documentation and artifacts of reusable source code. | Apache-2.0 | 14 | 2022-12-22 |
| [dell/csm-operator](https://github.com/dell/csm-operator) | null | Apache-2.0 | 13 | 2023-06-06 |
| [geritol/secret-backup-operator](https://github.com/geritol/secret-backup-operator) | Kubernetes operator for backing up secrets | MIT | 13 | 2021-10-12 |
| [konveyor/tackle2-operator](https://github.com/konveyor/tackle2-operator) | Konveyor Operator fully manages the deployment and life cycle of Konveyor (formerly Tackle) on Kubernetes and OpenShift. | Apache-2.0 | 13 | 2023-05-27 |
| [openvinotoolkit/operator](https://github.com/openvinotoolkit/operator) | OpenVINO operator for OpenShift and Kubernetes | Apache-2.0 | 13 | 2023-04-11 |
| [shipwright-io/operator](https://github.com/shipwright-io/operator) | An operator to install and configure Shipwright Builds on Kubernetes clusters. | Apache-2.0 | 13 | 2023-05-10 |
| [skylt/rabbitmq-operator](https://github.com/skylt/rabbitmq-operator) | Rabbitmq operator for kubernetes | MIT | 13 | 2022-11-24 |
| [IBM/k8s-enc-image-operator](https://github.com/IBM/k8s-enc-image-operator) | This operator provides facility to sync decryption keys required for Encrypted Container Images. | Apache-2.0 | 12 | 2023-01-25 |
| [lightbend/console-charts](https://github.com/lightbend/console-charts) | Lightbend Console Helm Charts | Apache-2.0 | 12 | 2023-03-02 |
| [PaloAltoNetworks/prisma-cloud-compute-operator](https://github.com/PaloAltoNetworks/prisma-cloud-compute-operator) | null | undefined | 12 | 2023-04-18 |
| [dmesser/cockroachdb-operator](https://github.com/dmesser/cockroachdb-operator) | A helm-based Operator for CockroachDB | Apache-2.0 | 11 | 2022-06-29 |
| [epam/edp-keycloak-operator](https://github.com/epam/edp-keycloak-operator) | It is responsible for establishing a connection to provided Keycloak Server, reconciling realms, and clients according to the created CRs | Apache-2.0 | 11 | 2023-05-25 |
| [jkremser/log2rbac-operator](https://github.com/jkremser/log2rbac-operator) | Kubernetes operator that helps you to set up your RBAC rules correctly | Apache-2.0 | 11 | 2023-05-23 |
| [malagoli/oracle-db-operator](https://github.com/malagoli/oracle-db-operator) | A kubernetes operator to manage the lifecycle of an Oracle Container Database | MIT | 11 | 2021-05-21 |
| [medik8s/node-maintenance-operator](https://github.com/medik8s/node-maintenance-operator) | A Kubernetes Operator to manage node maintenance through NodeMaintenance custom resources | Apache-2.0 | 11 | 2023-02-19 |
| [redhat-performance/cluster-impairment-operator](https://github.com/redhat-performance/cluster-impairment-operator) | Used to impair nodes in a cluster for testing the limits of a Kubernetes/OpenShift cluster. | Apache-2.0 | 11 | 2023-03-25 |
| [didil/autobucket-operator](https://github.com/didil/autobucket-operator) | Cloud Storage Kubernetes Operator with Go and Operator SDK | MIT | 10 | 2023-04-21 |
| [disposab1e/sealed-secrets-operator-helm](https://github.com/disposab1e/sealed-secrets-operator-helm) | [DEPRECATED] Sealed Secrets Operator (Helm) installs Sealed Secrets in OpenShift and Kubernetes. | Apache-2.0 | 10 | 2021-06-28 |
| [kube-incubator/tomcat-operator](https://github.com/kube-incubator/tomcat-operator) | Tomcat operator for Kubernetes | undefined | 10 | 2023-04-21 |
| [ouzi-dev/credstash-operator](https://github.com/ouzi-dev/credstash-operator) | A Kubernetes Controller for using Credstash Secrets in Kubernetes | Apache-2.0 | 10 | 2023-04-14 |
| [CleverCloud/clever-operator](https://github.com/CleverCloud/clever-operator) | A kubernetes operator that expose clerver cloud's resources through custom resource definition | MIT | 9 | 2022-05-19 |
| [interconnectedcloud/qdr-operator](https://github.com/interconnectedcloud/qdr-operator) | null | Apache-2.0 | 9 | 2021-12-10 |
| [krestomatio/moodle-operator](https://github.com/krestomatio/moodle-operator) | Moodle Operator for Kubernetes, based on Ansible Operator SDK. | Apache-2.0 | 9 | 2023-02-12 |
| [mesosphere/kudo-spark-operator](https://github.com/mesosphere/kudo-spark-operator) | KUDO Spark Operator | Apache-2.0 | 9 | 2023-05-17 |
| [storageos/operator](https://github.com/storageos/operator) | null | MIT | 9 | 2023-03-30 |
| [vgkowski/cassandra-operator](https://github.com/vgkowski/cassandra-operator) | kubernetes operator for cassandra clusters automation | Apache-2.0 | 9 | 2023-03-03 |
| [3scale/apicast-operator](https://github.com/3scale/apicast-operator) | null | Apache-2.0 | 8 | 2022-05-08 |
| [eumel8/otc-rds-operator](https://github.com/eumel8/otc-rds-operator) | RDS Operator for Open Telekom Cloud | MIT | 8 | 2023-05-12 |
| [kaiso/kom-operator](https://github.com/kaiso/kom-operator) | Production grade kubernetes operator for microservices | undefined | 8 | 2023-01-02 |
| [neuvector/neuvector-operator](https://github.com/neuvector/neuvector-operator) | NeuVector operator | Apache-2.0 | 8 | 2022-07-04 |
| [datastax/cass-config-builder](https://github.com/datastax/cass-config-builder) | Configuration builder for Apache Cassandra based on definitions at datastax/cass-config-definitions | Apache-2.0 | 7 | 2022-11-11 |
| [aceeric/nuxeo-operator](https://github.com/aceeric/nuxeo-operator) | A Go language Nuxeo Operator supporting OpenShift and Kubernetes | Apache-2.0 | 6 | 2022-07-25 |
| [IBM/esindex-operator](https://github.com/IBM/esindex-operator) | A k8s CRD and operator for Elasticsearch indices | Apache-2.0 | 6 | 2022-05-22 |
| [thatInfrastructureGuy/vaultsync-operator](https://github.com/thatInfrastructureGuy/vaultsync-operator) | Periodically syncs secrets from various Vaults to Kubernetes Secrets.  | Apache-2.0 | 6 | 2023-03-04 |
| [windup/windup-operator](https://github.com/windup/windup-operator) | Windup Operator for Openshift-Kubernetes | undefined | 6 | 2023-05-17 |
| [deepfabric/elasticell-operator](https://github.com/deepfabric/elasticell-operator) | k8s operator for elasticell | undefined | 5 | 2023-02-26 |
| [Kuadrant/authorino-operator](https://github.com/Kuadrant/authorino-operator) | Kubernetes Operator to manage Authorino instances | Apache-2.0 | 5 | 2022-11-22 |
| [Kuadrant/kuadrant-operator](https://github.com/Kuadrant/kuadrant-operator) | The Operator to install and manage the lifecycle of the Kuadrant components deployments. | Apache-2.0 | 5 | 2023-05-14 |
| [lsst/qserv-operator](https://github.com/lsst/qserv-operator) | Qserv Operator creates/configures/manages Qserv clusters atop Kubernetes | undefined | 5 | 2023-03-05 |
| [openebs/helm-operator](https://github.com/openebs/helm-operator) | Helm Operator for OpenEBS Installation | Apache-2.0 | 5 | 2022-05-29 |
| [openshift/node-problem-detector-operator](https://github.com/openshift/node-problem-detector-operator) | An operator to run Node Problem Detector on OpenShift | Apache-2.0 | 5 | 2021-11-09 |
| [whyseco/mailgun-operator](https://github.com/whyseco/mailgun-operator) | Mailgun Operator for kubernetes | MIT | 5 | 2021-03-10 |
| [xrootd/xrootd-k8s-operator](https://github.com/xrootd/xrootd-k8s-operator) | A Kubernetes operator to create and maintain highly-available Xrootd clusters | LGPL-2.1 | 5 | 2022-09-06 |
| [aerogear-attic/android-sdk-operator](https://github.com/aerogear-attic/android-sdk-operator) | Android SDK kubernetes operator | Apache-2.0 | 4 | 2020-02-14 |
| [anchore/engine-operator](https://github.com/anchore/engine-operator) | Helm based anchore engine operator | undefined | 4 | 2021-10-08 |
| [atlasmap/atlasmap-operator](https://github.com/atlasmap/atlasmap-operator) | Operator for AtlasMap on OpenShift / Kubernetes | Apache-2.0 | 4 | 2022-10-31 |
| [openshift/aws-efs-operator](https://github.com/openshift/aws-efs-operator) | Operator to manage AWS EFS on OpenShift | Apache-2.0 | 4 | 2022-12-20 |
| [stolostron/cluster-templates-operator](https://github.com/stolostron/cluster-templates-operator) | null | Apache-2.0 | 4 | 2023-05-20 |
| [sustainable-computing-io/kepler-operator](https://github.com/sustainable-computing-io/kepler-operator) | Kepler Operator | Apache-2.0 | 4 | 2023-04-19 |
| [tungstenfabric/tf-operator](https://github.com/tungstenfabric/tf-operator) | null | Apache-2.0 | 4 | 2023-03-17 |
| [carbonetes/carbonetes-analyzer](https://github.com/carbonetes/carbonetes-analyzer) | null | MIT | 3 | 2023-05-04 |
| [containers-ai/federatorai-operator](https://github.com/containers-ai/federatorai-operator) | null | undefined | 3 | 2022-06-06 |
| [ctron/ditto-operator](https://github.com/ctron/ditto-operator) | A Kubernetes Operator for Eclipse Ditto™ | EPL-2.0 | 3 | 2022-06-29 |
| [ctron/hawkbit-operator](https://github.com/ctron/hawkbit-operator) | A Kubernetes operator for Eclipse Hawkbit | EPL-2.0 | 3 | 2022-06-29 |
| [ctron/iot-simulator-operator](https://github.com/ctron/iot-simulator-operator) | Kubernetes operator for the IoT simulator | EPL-2.0 | 3 | 2023-01-05 |
| [embercsi/ember-csi-operator](https://github.com/embercsi/ember-csi-operator) | Operator to create/configure/manage Ember CSI Driver atop Kubernetes/OpenShift | Apache-2.0 | 3 | 2022-09-06 |
| [hybrid-cloud-patterns/patterns-operator](https://github.com/hybrid-cloud-patterns/patterns-operator) | null | Apache-2.0 | 3 | 2023-02-10 |
| [kubero-dev/kubero-operator](https://github.com/kubero-dev/kubero-operator) | An operator to run applications on Kubernetes like on Heroku | GPL-3.0 | 3 | 2023-03-28 |
| [aerogear/ups-config-operator](https://github.com/aerogear/ups-config-operator) | null | Apache-2.0 | 2 | 2019-05-24 |
| [gingersnap-project/operator](https://github.com/gingersnap-project/operator) | null | Apache-2.0 | 2 | 2023-03-20 |
| [IBM/ibmcloud-iam-operator](https://github.com/IBM/ibmcloud-iam-operator) | IBM Cloud IAM Kubernetes Operator provides a user-friendly Operator for IKS and OpenShift to automate scenarios for managing access to IBM Cloud Resources via Kubernetes CRD-Based APIs. | Apache-2.0 | 2 | 2021-05-29 |
| [Kuadrant/limitador-operator](https://github.com/Kuadrant/limitador-operator) | null | Apache-2.0 | 2 | 2022-01-10 |
| [kubesphere-sigs/ks-releaser-operator](https://github.com/kubesphere-sigs/ks-releaser-operator) | ks-releaser aims to help to release a project which especially has multiple git repositories. | Apache-2.0 | 2 | 2022-01-13 |
| [loxilb-io/kube-loxilb-operator](https://github.com/loxilb-io/kube-loxilb-operator) | loxilb agent operator | Apache-2.0 | 2 | 2023-04-20 |
| [parseablehq/operator](https://github.com/parseablehq/operator) | Parseable Kubernetes Operator | AGPL-3.0 | 2 | 2023-04-16 |
| [zadarastorage/zadara-operator](https://github.com/zadarastorage/zadara-operator) | Zadara Kubernetes Operator | undefined | 2 | 2022-06-29 |
| [acmenezes/nsm-operator](https://github.com/acmenezes/nsm-operator) | A kubernetes operator for deploying and managing Network Service Meshes | Apache-2.0 | 1 | 2022-06-29 |
| [apimatic/apimatic-kubernetes-operator](https://github.com/apimatic/apimatic-kubernetes-operator) | APIMatic API CodeGen operator for Kubernetes | undefined | 1 | 2022-04-23 |
| [change-metrics/monocle-operator](https://github.com/change-metrics/monocle-operator) | Monocle k8s OpenShift operator | undefined | 1 | 2023-04-17 |
| [IBM/cos-bucket-operator](https://github.com/IBM/cos-bucket-operator) | Kubernetes operator for lifecycle managiement of Cloud Object Storage Bucket  | Apache-2.0 | 1 | 2020-12-10 |
| [janepelladinesh/postgresql-operator](https://github.com/janepelladinesh/postgresql-operator) | null | undefined | 1 | 2022-06-29 |
| [redhat-developer/application-services-metering-operator](https://github.com/redhat-developer/application-services-metering-operator) | OpenShift Operator for metering Red Hat Application Services products | Apache-2.0 | 1 | 2021-10-13 |
| [hybridapp-io/ham-deployable-operator](https://github.com/hybridapp-io/ham-deployable-operator) | Deployable to wrap resources for Hybrid Application model | Apache-2.0 | 0 | 2022-03-24 |
| [Hyperfoil/horreum-operator](https://github.com/Hyperfoil/horreum-operator) | Operator managing Horreum instance in Openshift | Apache-2.0 | 0 | 2022-08-11 |
| [Hyperfoil/hyperfoil-operator](https://github.com/Hyperfoil/hyperfoil-operator) | Operator for installation in Openshift | undefined | 0 | 2022-05-16 |
| [IBM-Security/ibm-application-gateway-operator](https://github.com/IBM-Security/ibm-application-gateway-operator) | null | undefined | 0 | 2022-01-10 |
| [IBM-Security/verify-access-operator](https://github.com/IBM-Security/verify-access-operator) | null | Apache-2.0 | 0 | 2021-10-28 |
| [IBM-Security/verify-directory-operator](https://github.com/IBM-Security/verify-directory-operator) | null | undefined | 0 | 2023-01-24 |
| [J0zi/community-operators-pipeline](https://github.com/J0zi/community-operators-pipeline) | null | undefined | 0 | 2021-12-15 |
| [ktenzer/temporal-operator](https://github.com/ktenzer/temporal-operator) | Temporal Kubernetes Operator | Apache-2.0 | 0 | 2022-09-24 |
| [rabbitmq/single-active-consumer-operator](https://github.com/rabbitmq/single-active-consumer-operator) | null | MPL-2.0 | 0 | 2022-03-04 |
| [redhat-et/ibm-quantum-operator](https://github.com/redhat-et/ibm-quantum-operator) | null | undefined | 0 | 2020-09-09 |
| [sabre1041/sigstore-helm-operator](https://github.com/sabre1041/sigstore-helm-operator) | null | Apache-2.0 | 0 | 2021-09-01 |
| [sbose78/taxi](https://github.com/sbose78/taxi) | A taxi booking application repo containing source code, build CI pipelines and deployment CD pipelines | Apache-2.0 | 0 | 2021-02-17 |
| [sematext/sematext-operator](https://github.com/sematext/sematext-operator) | Sematext Operator configures Sematext Agent in your Kubernetes / OpenShift clusters | Apache-2.0 | 0 | 2022-06-22 |
| [silicomDK/sts-operator](https://github.com/silicomDK/sts-operator) | null | Apache-2.0 | 0 | 2022-01-10 |
| [skydive-project/skydive-golang-operator](https://github.com/skydive-project/skydive-golang-operator) | Golang Skydive Operator | Apache-2.0 | 0 | 2021-03-25 |
| [TremoloSecurity/myvd-k8s-operator](https://github.com/TremoloSecurity/myvd-k8s-operator) | null | Apache-2.0 | 0 | 2019-07-28 |
| [yard-turkey/aws-s3-operator](https://github.com/yard-turkey/aws-s3-operator) | AWS S3 Provisioner Operator Manifests | undefined | 0 | 2019-05-02 |
