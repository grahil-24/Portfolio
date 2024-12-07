# My Portfolio Website

This is a portfolio website that I customized for the [Cloud Resume Challenge](https://cloudresumechallenge.dev/). The website serves as a digital resume to showcase my skills and projects, with a particular focus on my cloud computing experience. The backend part is at https://github.com/grahil-24/backend-crc/

## Credits

This portfolio is based on a design created by Michael D'Angelo(https://github.com/mldangelo). I cloned their repository and made modifications to suit the needs of this project. Big thanks to them for making their work available and inspiring my own site!

## Project Overview

The portfolio website includes sections for:

- **About Me**: A brief introduction and background about myself.
- **Projects**: An overview of my key projects, with a focus on cloud computing and other technical skills.
- **Skills**: A summary of my skills, including cloud platforms, programming languages, and tools.
- **Contact**: A form for visitors to reach out to me.

## Technologies Used

- **github action**: for CD
- **AWS S3** for hosting the static website
- **AWS CloudFront** for content delivery and caching
- **AWS Route 53** for DNS management
- **AWS Certificate Manager** for SSL/TLS certificates
- **AWS API Gateway** for exposing serverless backend function
- **AWS DynamoDB** for storing visitor count
- **AWS lambda** for updating the visitor count stored in dyanamoDB