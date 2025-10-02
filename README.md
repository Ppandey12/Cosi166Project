# COSI 166Project

Group F Project for COSI 166b

## App Demo

Demo files can be found in DemoEditor.
The current working files for front-end and back-end are stored in demo and altdemoapi subfolders.

## Plan

Our plan for the first release of the app

- Front-end
  - Teacher vs Student privileges
  - Login page with OAuth2
- Teacher interface
  - Make a new class
  - Start class session
  - Class dashboard and session dashboard
- Student interface
  - Join a class
  - Join class session
  - Class dashboard and session dashboard
- Back-end
  - Endpoints for class functionality, authentication
  - Code transfer > execution > LLM > response pipeline
  - Dashboard creation and analytics storage
  - Model for basic database schema
  - Extra authentication implementation

## Front-end Back-end Info

_More specific info can be found in the README files in demo and altdemoapi_

## To-Do 
| Task | Description | Completed | Contributor |
| ---- | ----------- | --------- | ----------- |
| Login Page | Create Login page and do OAuth work | ❌ | Paras Pandey |
| Teacher class session page | Functionality for prompting questions and fetching student answers. Add box for expected student code output | ❌ ||
| UI clean-up | Make the UI prettier, add nice styles | ❌ ||
| Database wrapper | Create dev automations and wrapper for database functions | ❌ | Efren Haskell  |
| Analytics Generation (Non-AI) | Create analytics based on student completion of problems, answer checking, etc... | ❌ ||
| AI skill prompt engineering | Limit potential skill output | ❌ ||
| Skill input page | Have page for teacher to input list of skills for that day's class | ❌ ||
| Analytics Generation (AI) | Create analytics based on AI skill output for student answers | ❌ ||
| SQL queries | Queries for fetching student data | ❌ ||
