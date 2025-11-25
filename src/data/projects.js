import ansibleDockerNginx from '../assets/projects/ansible-docker-nginx.svg'
import iotPlateDetection from '../assets/projects/iot-plate-detection.svg'
import turboHealthMonitor from '../assets/projects/turbo-health-monitor.svg'
import awsVpcAutoscaling from '../assets/projects/aws-vpc-autoscaling.svg'
import jenkinsReactCicd from '../assets/projects/jenkins-react-cicd.svg'

export const projects = [
  {
    title: 'Ansible + Docker: Nginx on Multiple Hosts',
    image: ansibleDockerNginx,
    description:
      'Automated IaC workflow using Ansible to deploy and manage Nginx containers across Ubuntu EC2 instances with restart policies and public access.',
    tech: ['Ansible', 'Docker', 'AWS EC2', 'Ubuntu', 'YAML'],
    link: 'https://github.com/placeholder/ansible-docker-nginx',
  },
  {
    title: 'Vehicle Number Plate Detection (IoT)',
    image: iotPlateDetection,
    description:
      'Intelligent number plate detection using image processing + OCR and IoT cloud connectivity for real-time monitoring.',
    tech: ['IoT', 'Python', 'OCR', 'Cloud'],
    link: 'https://github.com/placeholder/iot-number-plate',
  },
  {
    title: 'Low Power Turbo Coded Health Monitoring',
    image: turboHealthMonitor,
    description:
      'Low-power health monitoring system using turbo coding for reliable data transmission optimized for wearable IoT medical systems.',
    tech: ['DSP', 'IoT', 'Turbo Coding'],
    link: 'https://github.com/placeholder/health-monitoring-turbo',
  },
  {
    title: 'AWS Auto Scaling VPC Setup',
    image: awsVpcAutoscaling,
    description:
      'Provisioned scalable VPC with subnets, routing, Auto Scaling groups, load balancing, monitoring via CloudWatch.',
    tech: ['AWS', 'VPC', 'ASG', 'ELB', 'CloudWatch'],
    link: 'https://github.com/placeholder/aws-vpc-autoscaling',
  },
  {
    title: 'Jenkins CI/CD Pipeline for React App',
    image: jenkinsReactCicd,
    description:
      'End-to-end CI/CD pipeline with Jenkins for build, test, Dockerize, and deploy React app to AWS EC2.',
    tech: ['Jenkins', 'Docker', 'React', 'AWS EC2'],
    link: 'https://github.com/placeholder/jenkins-react-cicd',
  },
]