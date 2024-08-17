export const resume = {
  work: [
    {
      company: "Roku",
      image: "/resume/work/roku.png",
      positions: [
        {
          title: "Senior Software Engineer",
          startDate: "August 2024",
          endDate: "Present",
          description: [],
        },
        {
          title: "Software Engineer",
          startDate: "July 2023",
          endDate: "July 2024",
          description: [],
        },
      ],
    },
    {
      company: "SHOPLINE",
      image: "/resume/work/shopline.jpeg",
      positions: [
        {
          title: "Software Engineer",
          startDate: "June 2022",
          endDate: "Janurary 2023",
          description: [
            "Implemented cart microservice using Go and gRPC focusing on filtering and applying merchants' promotions with Hong Kong and Taiwan teams",
            "Boosted the speed and performance of retrieving and filtering promotions of merchants by 90%, from 11s to 1s, and rolled out filtering feature to over 5,000 merchants",
            "Wrote implementation plans and flowcharts on filtering and applying different types of bundle promotions",
            "Wrote unit tests and designed integration tests on applying promotions and achieved over 70% code coverage with Go Testify",
            "Assisted on updating existing Helm deployment files and deployed using development features to AWS EKS cluster",
            "Monitored development and production logs and tracked issues using NewRelic and AWS CloudWatch",
          ],
        },
      ],
    },
    {
      company: "AppicIDEA IT Solutions Limited",
      image: "/resume/work/appicidea.jpeg",
      positions: [
        {
          title: "Software Engineer",
          startDate: "June 2021",
          endDate: "June 2022",
          description: [
            "Architected and designed highly available and scalable solutions using AWS including EC2, VPC, S3, RDS for clients",
            "Collaborated with frontend developers and provided assistance and guidance on the integration of server-side APIs",
            "Developed 5 server-side applications using Ts.ED, Node.js framework with Typescript, integrating with MySQL, PostgreSQL, Redis, RabbitMQ and Elasticsearch",
            "Assisted on frequent code merges, builds, deployments with CI/CD pipeline using Jenkins, Docker and Kubernetes and setting up of the deployment environments including internal UAT and production on AWS",
            "Maintained and monitored production applications with Kibana APM system on Elastic Cloud and provided technical support to clients",
          ],
        },
        {
          title: "Frontend Developer",
          startDate: "December 2020",
          endDate: "June 2021",
          description: [
            "Designed and documented common practices to standardize coding and git commit styles for internal developers",
            "Developed and implemented 4 mobile applications with React Native, Redux, Typescript",
            "Integrated mobile applications with internal Node.js REST API applications and Firebase",
            "Configured CI/CD pipelines for mobile applications with App Center to increase delivery speed to clients for UAT and production purposes by 30%",
          ],
        },
      ],
    },
  ],
  education: [
    {
      school: "The Chinese University of Hong Kong",
      image: "/resume/education/cuhk.png",
      degree: "B.Sc. in Computer Science",
      startDate: "September 2015",
      endDate: "July 2019",
      description: [
        "Specialized in cloud, networks, database, web and mobile applications development",
        "Developed a set of 2 educational applications for assignment marking and grade analysis in final year project with Spring.io, Swift, React Native, Javascript",
      ],
    },
  ],
};
