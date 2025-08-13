import React from 'react'
import SubscriptionCard from './SubscriptionCard';
const annualPlan=[
    "Add unlimeted project",
    "Access to live chat",
    "Add unlimeted team memeber",
    "Advanced reporting",
    "Priority Support",
    "Everything Which monthly plan has",
];
const freePlan=[
    "Add only 3 projects",
    "Basic Task Managment",
    "Project Collaboration",
    "Basic Reporting",
    "Email Notification",
    "Basic Acess Control",
]
const paidPlan=[
    "Add unlimeted Project",
    "Acess to live Chat",
    "Add unlimted team member",
    "Advanced Reporting",
    "PrioritySupport",
    "Customization Options",
    "Integration Support ",
    "Advanced Security",
    "Traning and Resources",
    "Access Control ",
    "Custom Workflows"

]
const Subscription = () => {
  return (
    <div className='p-10'>
    <h1 className='text-5xl font-semibold py-5 pb-16 text-center'>Pricing</h1>
    <div className='flex flex-col lg:flex-row justify-center items-center gap-9'
    >
        <SubscriptionCard data ={{planName:"Free",features:freePlan,planType:"FREE",price:0,buttonName:true?"Current Plan":"Get Started"}}></SubscriptionCard>
        <SubscriptionCard data ={{planName:"Monthly Plain Plain",features:paidPlan,planType:"MONTHLY",price:799,buttonName:true?"Current Plan":"Get Started"}}
        ></SubscriptionCard>
        <SubscriptionCard
        data ={{planName:"Annual Paid Plain",features:annualPlan,planType:"ANNUALLY",price:6711,buttonName:true?"Current Plan":"Get Started"}}
        ></SubscriptionCard>
    </div>
    </div>
  )
}

export default Subscription
