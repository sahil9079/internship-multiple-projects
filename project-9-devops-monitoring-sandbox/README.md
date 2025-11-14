DevOps Monitoring Sandbox - All-in-One VM
A fully automated monitoring and alerting sandbox environment for DevOps training and learning purposes. This project provisions a complete monitoring stack using VirtualBox and Vagrant.

🎯 Project Overview
This sandbox provides a production-ready monitoring environment with pre-configured dashboards, alerts, and exporters. Ideal for learning DevOps monitoring concepts, testing alert rules, and experimenting with observability tools.

🛠️ Tools & Technologies
VirtualBox: Virtualization platform

Vagrant: VM automation and provisioning

Prometheus (v2.45.0): Metrics collection and alerting

Grafana (Latest OSS): Visualization and dashboards

Node Exporter (v1.6.1): System metrics exporter

Alertmanager (v0.26.0): Alert routing and notification

📋 Prerequisites
Before starting, ensure you have:

VirtualBox 6.1+ installed (Download)

Vagrant 2.3+ installed (Download)

Minimum 4GB RAM available for the VM

10GB disk space for VM and tools

Internet connection for downloading packages

🚀 Quick Start
1. Clone or Download the Project
bash
git clone <your-repo-url>
cd devops-monitoring-sandbox
Or download and extract the ZIP file containing all configuration files.

2. Verify Files
Ensure you have these files in your directory:

text
devops-monitoring-sandbox/
├── Vagrantfile
├── provision.sh
├── prometheus.yml
├── alert_rules.yml
├── alertmanager.yml
├── prometheus.service
├── node_exporter.service
├── alertmanager.service
├── grafana-datasource.yml
├── node-exporter-dashboard.json
└── README.md
3. Start the VM
bash
vagrant up
This command will:

Download Ubuntu 20.04 LTS base image (first time only)

Create a VM with 4GB RAM and 2 CPUs

Install all monitoring tools

Configure systemd services

Start all services automatically

Note: First-time setup takes