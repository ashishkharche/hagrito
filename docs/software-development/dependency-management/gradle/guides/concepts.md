---
sidebar_label: Concepts
description: Gradle Concepts.
---

# Gradle - Concepts

## Convention plugins

Since our build consists of multiple-subprojects, we want to share build logic and configuration between them. For this, we utilize so-called _convention plugins_ that are located in the `buildSrc` folder. Convention plugins in `buildSrc` are an easy way to utilise Gradle’s plugin system to write reusable bits of build configuration.

[Building Java Applications with libraries Sample](https://docs.gradle.org/current/samples/sample_building_java_applications_multi_project.html#what_youll_build)

## `./gradlew run`

The `run` task tells Gradle to execute the `main` method in the class assigned to the `mainClass` property.

[Building Kotlin Applications Sample](https://docs.gradle.org/current/samples/sample_building_kotlin_applications.html#run_the_application)

## `rootProject.name`

`rootProject.name` assigns a name to the build, which overrides the default behavior of naming the build after the directory it’s in. It’s recommended to set a fixed name as the folder might change if the project is shared - e.g. as root of a Git repository.

[Building Kotlin Applications Sample](https://docs.gradle.org/current/samples/sample_building_kotlin_applications.html#review_the_project_files)