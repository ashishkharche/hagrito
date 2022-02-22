---
sidebar_label: What is CI/CD?
description: What is CI/CD?.
---

# What is CI/CD?

CI/CD (Continuous Integration and Continuous Delivery/Deployment) is another commonly used term in the context of builds and build automation. Maven is a small cog in the CI/CD pipeline and it is important to understand the bigger picture of how code lands from developers’ IDE to binaries in production. The underlying goal of a CI/CD pipeline is for teams to deliver code changes more frequently and reliably. A modern-day CI/CD pipeline involves continuous development, continuous testing, continuous integration, continuous deployment, and continuous monitoring of a software application throughout the application’s development life cycle.
The acronym CI/CD has a few different meanings. The “CI” in CI/CD always refers to continuous integration, which is an automation process for developers who are checking in code. Successful CI means new code changes to an app are regularly built, tested, and merged to a shared repository. It’s a solution to the problem, known as integration hell, of having too many branches of an application in development at once that might conflict with each other. A developer checks out a branch and makes their changes, but when attempting to merge the branch back finds too many merge conflicts that take longer to resolve than the time required to make the code change.
The “CD” in CI/CD refers to continuous delivery and/or continuous deployment which are related concepts that are sometimes used interchangeably. Both are about automating further stages of the pipeline, but they’re used separately to illustrate how much automation is happening.
widget

![](https://i.imgur.com/s6b0Z28.png)

Continuous delivery usually means that a developer’s changes to an application are automatically bug tested and uploaded to a code repository (e.g., GitHub or Perforce). The uploaded changes can then be deployed to a staging or live production environment by the operations team. The goal of continuous delivery is to apply minimal effort to deploy new code. However, with continuous delivery, the buck stops at the code repository.
Continuous deployment picks up where continuous delivery left off. Continuous deployment involves automatically releasing a developer’s code changes from the repository to the production environment, where they are then usable by customers. Sometimes, the term continuous deployment is also used to include the processes of continuous delivery.
Often, the term CI/CD is used to mean all three connected practices of continuous integration, continuous delivery, and continuous deployment. Without being bogged-down in the semantics, it is enough to visualize the CI/CD process as a pipeline that involves a high degree of ongoing automation and continuous monitoring. Maven is a small but important component of the CI/CD pipeline.