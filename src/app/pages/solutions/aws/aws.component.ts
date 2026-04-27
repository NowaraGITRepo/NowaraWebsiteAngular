import { Component } from '@angular/core';
import { IndustryPageComponent, IndustryPageConfig } from '../../../components/shared/industry-page/industry-page.component';

@Component({ selector: 'app-aws', standalone: true, imports: [IndustryPageComponent], template: `<app-industry-page [config]="config"></app-industry-page>` })
export class AwsComponent {
  config: IndustryPageConfig = {
    badge: 'AWS Cloud Partner', heroTitle: 'AWS Cloud', heroTitleHighlight: 'Services',
    heroDesc: 'Nowara Infotech delivers enterprise AWS cloud solutions — from infrastructure setup and migration to managed services and DevOps on Amazon Web Services.',
    heroCta: 'Go AWS', heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000',
    capabilitiesTitle: 'AWS Services We Deliver',
    capabilities: [
      { title: 'EC2 & Compute', desc: 'Scalable virtual servers and containerised workloads on AWS EC2 and ECS.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>' },
      { title: 'S3 & Storage', desc: 'Object storage, archiving, and content delivery with S3 and CloudFront.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>' },
      { title: 'RDS & Databases', desc: 'Managed relational and NoSQL databases — RDS, Aurora, DynamoDB.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 1.105 2.239 2 5 2s5-.895 5-2V7m-10 0c0-1.105 2.239-2 5-2s5 .895 5 2"/></svg>' },
      { title: 'AWS Lambda & Serverless', desc: 'Event-driven serverless architectures for cost-efficient applications.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>' },
      { title: 'CloudFormation & IaC', desc: 'Infrastructure as code for reproducible, auditable cloud environments.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>' },
      { title: 'AWS Security & IAM', desc: 'Identity management, GuardDuty, WAF, and Shield for cloud security.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>' },
    ],
    industriesTitle: 'AWS Use Cases',
    industries: ['SaaS Applications', 'Data Warehousing', 'Serverless Apps', 'IoT Platforms', 'ML & AI Workloads', 'Disaster Recovery'],
    stat1Value: '99.99%', stat1Label: 'AWS Uptime', stat2Value: '60%', stat2Label: 'Faster Deployments',
    workflowTitle: 'AWS Engagement Model',
    steps: [
      { step: '01', title: 'Cloud Readiness', desc: 'Assess your workloads and AWS suitability.' },
      { step: '02', title: 'Architecture', desc: 'Design a Well-Architected Framework compliant solution.' },
      { step: '03', title: 'Proof of Concept', desc: 'Build and validate a PoC on AWS.' },
      { step: '04', title: 'Production Migration', desc: 'Migrate at scale with minimal downtime.' },
      { step: '05', title: 'Managed Services', desc: 'Ongoing AWS management, monitoring, and optimisation.' },
    ],
    compareRows: [
      { feature: 'Global Regions', standard: 'Limited On-premise', dynamics: '32 AWS Global Regions' },
      { feature: 'Scalability', standard: 'Hardware Constraint', dynamics: 'Infinite On-demand Scale' },
      { feature: 'Cost', standard: 'Fixed CapEx', dynamics: 'Pay-as-you-go OpEx' },
      { feature: 'Innovation', standard: 'Slow Adoption', dynamics: '200+ AWS Services Available' },
    ],
    formTitle: 'Power Your Business', formSubTitle: 'with AWS.',
    formDesc: 'Speak with our AWS architects about designing your cloud strategy today.',
  };
}
