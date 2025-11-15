import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

function Summary() {
  return (
    <motion.section
      id="summary"
      className="container summary-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-4">Summary</h2>
      <p className="summary-text lead">
       DevOps and Cloud Engineer focused on automation, container orchestration, and reliable CI/CD on AWS using Docker, Kubernetes, Jenkins, and Terraform. Built a 3‑tier Java app on Kubernetes (Kops) with Dockerized services and rollout best practices (Deployments, Services, Ingress, Secrets). Comfortable with AWS core services, Linux, Git, and scripting in Bash/Python to streamline workflows and improve delivery speed.
      </p>
    </motion.section>
  );
}

export default Summary;
