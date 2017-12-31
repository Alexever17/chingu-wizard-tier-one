const actOne = {
  act: {
    title: 'Act I: Project Setup',
    order_index: 0,
    repeatable: false,
    milestones: [
      {
        title: 'Meet the Team',
        order_index: 0,
        description: `
*Goal*: Get acquainted with your teammates.

*Suggested Actions*:
> Read each other''s intro stories.
> Share a project or two you are most proud of in your learning journey.
> Share some prime picks from your gif collection.

*Icebreakers*:
> What time zone are you in?
> What sort of music do you like to code to?
> What is your preferred learning style (videos, docs, dialoge etc)?
> What are your favorite YouTube channels, subreddits or blogs?
> What technologies are you most comfortable using and explaining?
> What technologies are you most interested in learning this Voyage?
        `,
        resource_url: null,
      },
      {
        title: 'Set Goals and Expectations',
        order_index: 1,
        description: `
*Goal*: Determine the team''s learning expectations and availability.

*Commitment*:
> It is critical to make sure that everyone is realistic in their level of commitment and availability.
> Working less than you commit to is disrespectful to your teammates and can stunt the team''s progress and morale.
> Typically team members commit 4-10 hours a week towards the project.

*Learning Goals*:
> Evaluate everyone''s current technical abilities.
> Determine at least one primary technical learning goal for each teammate
> Pick something that is 25% outside of the team''s comfort zone / skillset.
> Any further and you will likely be overwhelmed.
> Any less and you are limiting your rate of learning.

*Voyages go by faster than you think and you need to focus on learning through building rather than getting caught in research rabbit-holes*.
        `,
        resource_url: null,
      },
      {
        title: 'Brainstorm Project Options',
        order_index: 2,
        description: `
*Goal*: Decide on a project to pursue.

*Tips*:
> Stay focused on what is possible as a balance of the cohort season''s length, team experience and the commitment level.
> Remember to incorporate as many team learning goals as are feasible.
> *The goal is to learn something new not to stay stuck only working with what you know.*

*The Stack*:
> Front End - consider the library / framework your project will use
> Back End - consider the backend language and library / framework
> Database - consider the database type and ORM your team will use to interact with it

*It is better to underpromise and overdeliver _especially if this is your first Voyage_*
        `,
        resource_url: null,
      },
      {
        title: 'Define Your Workflow',
        order_index: 3,
        description: `
*Goal*: Decide on which workflow tools the team will use.

*Tips*:
> Don''t go overboard! Workflow tools are only useful when they are used. Keep it simple so that using the tools feels effortless rather than a chore.
> If you don''t already have a workflow or specific tools in mind consider the suggestions below.

*Suggested Workflow Tools*
>Besides the obvious Slack and Github the following are tools that work for many Chingu teams
> <https://www.waffle.io|Waffle> - Trello and Github had a baby that makes project management a breeze
> <https://www.discord.com|Discord> - "Always-on" communication tool. Leave it on mute while you work then unmute as needed to gain access to team mates for problem solving detours. Use it for clear audio while using Google Hangouts (don''t forget to mute the echo from Hangouts!)
> <https://hangouts.google.com|Google Hangouts> - A screensharing / pair-programming must (until VSC Live comes out!!)

*Suggested Use*:
> Hold a meeting on Discord and / or Hangouts to discuss the key steps required to complete the next sprint.
> Use Waffle to compartmentalize the steps of the sprints into grab-and-go tasks.
> Leave Discord on and unmute as needed to discuss and conquer roadblocks.
> Use Slack for short code snippets. Use Hangouts to screenshare for more complex debugging.

*A proper workflow and concise collection of workflow tools is what makes the difference between a team that makes it and one that doesn''t.*
        `,
        resource_url: null,
      },
      {
        title: 'Set Up',
        order_index: 4,
        description: `
*Goal*: Set up and explore your team''s workflow tools.

*Tips*:
> Check to see if your pre-made Voyage team repo is functional and the proper permissions and settings are configured.
> Ask for help from the community with setting up tools if you get stuck.
> Don''t get turned off because the setup seems daunting. It''s a one time process - take the time to do it right!

*Required*:
> Make sure everyone uses the tools.
> Walk through an example usage of each tool and how they all come together.
> Work out any kinks in people''s microphones, internet connections, permissions etc.

*The first sprint IS NOT the time to learn how to use the tools at hand.*
*Get comfortable early so you can focus on building not technical difficulties!*
        `,
        resource_url: null,
      },
      {
        title: 'Define the MVP',
        order_index: 5,
        description: `
*Goal*: Hold a meeting to decide on the minimum viable product (MVP).

*Tips*:
> Deciding on the MVP for the project is the most important step your team must take before embarking on your Voyage.
> Consider the features that can together serve, at minimum, as a functioning prototype of the project's vision.
> Defining the MVP is committing to the bare minimum you and the team will accomplish before the cohort deadline.

*Focus Points*:
> Front End - consider the views and their associated functionality
> Back End - consider the endpoints, routes and associated logic
> Database - consider the complexity of the database and associated models
> Deployment - consider how / where you will host the project

*Schedule a Meeting*
> Schedule your next meeting to plan your first sprint!

*Don't throw away those features and moonshot ideas that fall outside of the scope of the MVP!*
*Shoot for finishing the MVP ahead of schedule so the extra time can be used to implement those additional features and polish*
        `,
        resource_url: null,
      },
    ],
  },
};

const actTwo = {
  act: {
    title: 'Act II: HTML & CSS Phase – Building the Foundation',
    order_index: 1,
    repeatable: true,
    milestones: [
      {
        title: 'Plan Sprint I',
        order_index: 0,
        description: `
*Goal*: Subdivide the page into areas and assign them evenly between the teammembers.

*Notes*:
> In this act you will build the the html and css part of the landing page. You shouldn't concern yourself with javascript at this point.
> Splitting up the workload in a landing page can be difficult, but every web page can be divided into sections
> Here you can see a simple example: https://i.imgur.com/q0Z2SnH.png
> Your goal for the first sprint should be to complete at least one of your assigned areas.
> The tasks for each sprint *should require 9 days or less to complete*.
> Do your best but don't worry if you underestimate the required time - you can reflect and adjust in the next sprint.
> For Sprint I about the half of the page should be assigned

*Tips*:
> Devide and Conqour: Breaking a big task into small chuncks will help you focus and will give you a sense of accomplishement after compliting a section
> Better time-management: The smaller the task, the better it will fit into your section.
> Especially new developers don't have the habit or the time to code daily, be patient with your collegues if the take a while longer.
> Even though you may end up writting the same rules more then one time, a chingu project is about learning, not about shipping the best product
> Of course you will clean everything up in the end

*Workflow*:
> Now is the time to create cards for each of the tasks.
> Write the cards by adding descriptive titles and core details of the task as bullet points.
> The cards should serve as guidelines to each task with links to key references or specific notes that may be forgotten.
> Finish by reviewing and assigning the cards together as a team so that everyone is on the same page and knows what they are responsible for.

*Don't spend too much time writing the cards or getting caught up with all the fancy buttons!*
        `,
        resource_url: null,
      },
      {
        title: 'Begin Sprint I',
        order_index: 1,
        description: `
*Goal*: Turn all that talk into code!

*Tips*:
> Try to be online regularily to help out your teammates
> Don't be frustrated, sometimes there will be a roadblock or something new, which you don't now.
> Try to solve it yourself or google the problem, but don't be shy to shoot a question in the teamslack or the general channels.
> Avoid asking obvious questions, but chingus are very helpful and you will surely get some answers in the next 24 hours.

*Github*:
> Everybody should work in their own branch, which then can be merged into development, but the team can decide on any given structure they want
> Just don't forget to actually decide on one as a team!

*Patience*:
> Don't expect everybody to be finished at the same time as you, some will take longer the other will be faster.
> There is always some other projects which could sparkle your interest or keep you busy while you are waiting for your teammates to finish.
> Here are some links to get you going:
> https://100dayscss.com/
> https://javascript30.com/
> https://github.com/P1xt/p1xt-guides/blob/master/job-ready-javascript-edition-2.0.md
        `,
        resource_url: null,
      },
      {
        title: 'Sprint Progress Review',
        order_index: 2,
        description: `
*Goal*: Review the team's progress after half the sprint's duration.

*Schedule a Meeting*
> Schedule a time a few days from the start of the sprint to check in with everyone and make sure forward progress is being made by the team.
> This is an opportunity, not a chore! Use this opportunity to speek about your problems, roadblocks and thinks you can't wrap your head about.
> But if there is an issue and it is impossible to find the right time for everyone, don't fret! Just have an asyncronous meeting.
> https://en.wikipedia.org/wiki/Asynchronous_conferencing
> In general it is also necessery to be able to review the code written, so everybody should push the current version to Github.

*Steps*:
> Assess everyone's status in the sprint.
> Discuss any roadblocks that are holding back progress.
> Explore solutions together and construct an actionable plan to move forward.
> Celebrate completed tasks and share the lessons learned in working on them.
> Assess the remaining tasks and take note of how close you are to meeting this sprint's deadline.
        `,
        resource_url: null,
      },
      {
        title: 'Completed Sprint Review, Code Review and Merging',
        order_index: 3,
        description: `
*Goal*: Go over the sprint, reflect on the experience gained and merge everything accomplished.

*Review the code and merge*:
> Cross-review each other's code and prevent merging without review.
> Ask for clarification and add comments wherever needed.
> Openly explain decisions and implementation details.
> Test completed tasks whenever possible and seek out bugs to catch.
> Work on maintaining a consistent style across the team's code.

*Tips - Review*:
> Write detailed pull request notes to maintain a clear history of the project and its progress.
> These will also help team members cross-review your PRs

*Completion of the Sprint*:
> Assess the number of remaining tasks
> Determine why they were left incomplete
> Discuss how the next sprint will be improved by factoring in the lessons learned
> Discuss how the workflow worked to or against your team's advantage
> Discuss any new ideas that stemmed from completing the tasks. Create notes or cards to keep these ideas handy for the future.

*Patience*:
> Yes we know. We mentioned it already. But, as always, working with other bring massive advantages, but some disadvantiges as well.
> Still, we at chingu believe that the sum of your work as a team will be higher than if you work alone!
> Be patient with each other and understand that it's okay to miss a deadline.
> Carry over the remaining tasks and plan better for the next one!
        `,
        resource_url: null,
      },
      {
        title: 'Plan Sprint II',
        order_index: 4,
        description: `
*Goal*: Divide the remaining sections of the landing page

*Notes*:
> Here the example again: https://i.imgur.com/q0Z2SnH.png
> The goal of this sprint is to produce a finished html and css mockup of your webpage.
> Sometimes a member might want to take on more task because others have some personel issues, but every member should have at least one task.
> The tasks for each sprint *should require 9 days or less to complete*.

*Tips*:
> Devide and Conqour: Breaking a big task into small chuncks will help you focus and will give you a sense of accomplishement after compliting a section
> Better time-management: The smaller the task, the better it will fit into your section.
> Especially new developers don't have the habit or the time to code daily, be patient with your collegues if the take a while longer.

*Workflow*:
> If there were some problems in the last sprint, now is the perfect time to fix things
> Just don't demand that everything will be cattered to your own preferences, it should be a teams decisions
> Don't forget though, more time spent on planing or arguing means less time for coding
> A sub-optimal workmanagement beats no work done at any given day, so just steak to something mediocre if it means to get work done
> Even if you dislike something, it is just one more things learn and in the future you will now what NOT to do

*Don't spend too much time writing the cards or getting caught up with all the fancy buttons!*

*Panicking or aka "We will never finish it in 9 days!!!"*:
> Probably you will even if it looks complicated at first. But it is just an impression sometimes you have before you actually start coding.
> And don't panick too much, even if you won't finish it this sprint, just have an additional sprint.
> This roadmap describes an optimal solution, with enough free time to change things at the end or to have some experiments
> But if you need your time here, take it. The minimum viable product is still decided by your team not by chingu
> We are just here to help you. Ask some of the more experienced members if you need help.
        `,
        resource_url: null,
      },
      {
        title: 'Begin Sprint II',
        order_index: 5,
        description: `
*Goal*: Turn all that talk into code!

*Tips*:
> Try to be online regularily to help out your teammates
> Don't be frustrated, sometimes there will be a roadblock or something new, which you don't now.
> Try to solve it yourself or google the problem, but don't be shy to shoot a question in the teamslack or the general channels.
> Avoid asking obvious questions, but chingus are very helpful and you will surely get some answers in the next 24 hours.

*Github*:
> Everybody should work in their own branch, which then can be merged into development, but the team can decide on any given structure they want
> Just don't forget to actually decide on one as a team!

*Patience*:
> Don't expect everybody to be finished at the same time as you, some will take longer the other will be faster.
> There is always some other projects which could sparkle your interest or keep you busy while you are waiting for your teammates to finish.
> Here are some links to get you going:
> https://100dayscss.com/
> https://javascript30.com/
> https://github.com/P1xt/p1xt-guides/blob/master/job-ready-javascript-edition-2.0.md
        `,
        resource_url: null,
      },
      {
        title: 'Sprint Progress Review',
        order_index: 6,
        description: `
*Goal*: Review the team's progress after half the sprint's duration.

*Schedule a Meeting*
> Schedule a time a few days from the start of the sprint to check in with everyone and make sure forward progress is being made by the team.
> This is an opportunity, not a chore! Use this opportunity to speek about your problems, roadblocks and thinks you can't wrap your head about.
> But if there is an issue and it is impossible to find the right time for everyone, don't fret! Just have an asyncronous meeting.
> https://en.wikipedia.org/wiki/Asynchronous_conferencing
> In general it is also necessery to be able to review the code written, so everybody should push the current version to Github.

*Steps*:
> Assess everyone's status in the sprint.
> Discuss any roadblocks that are holding back progress.
> Explore solutions together and construct an actionable plan to move forward.
> Celebrate completed tasks and share the lessons learned in working on them.
> Assess the remaining tasks and take note of how close you are to meeting this sprint's deadline.
        `,
        resource_url: null,
      },
      {
        title: 'Completed Sprint Review, Code Review and Merging',
        order_index: 7,
        description: `
*Goal*: Go over the sprint, reflect on the experience gained and merge everything accomplished.

*Review the code and merge*:
> Cross-review each other's code and prevent merging without review.
> Ask for clarification and add comments wherever needed.
> Openly explain decisions and implementation details.
> Test completed tasks whenever possible and seek out bugs to catch.
> Work on maintaining a consistent style across the team's code.

*Tips - Review*:
> Write detailed pull request notes to maintain a clear history of the project and its progress.
> These will also help team members cross-review your PRs

*Completion of the Sprint*:
> Assess the number of remaining tasks
> Determine why they were left incomplete
> Discuss how the next sprint will be improved by factoring in the lessons learned
> Discuss how the workflow worked to or against your team's advantage
> Discuss any new ideas that stemmed from completing the tasks. Create notes or cards to keep these ideas handy for the future.

*Patience*:
> Yes we know. We mentioned it already. But, as always, working with other bring massive advantages, but some disadvantiges as well.
> Still, we at chingu believe that the sum of your work as a team will be higher than if you work alone!
> Be patient with each other and understand that it's okay to miss a deadline.
> Carry over the remaining tasks and plan better for the next one!
        `,
        resource_url: null,
      },
      {
        title: 'Leaving Act 2',
        order_index: 8,
        description: `
*Goal*: Look out for any bugs or discrepencies in the landing page

*Acknowledgement*:
> The team did very well and you should give yourself a pat on the back. You are half-way there and will be soon a proud owner of completed project.
> Please don't give up now, we believe in you all :)

*Tips*:
> Give it a last check to be sure that everything is nice before you move on
> Now is a good time to merge into master and have a live preview with github pages.
> In case you never heard of it: https://pages.github.com/

*Quote*:
> Have you seen a marathon race?
> Some runners will be leading right from the first - but after the halfway mark,
> it is the runners at the back who take over while the early leaders fade out.
> Sharad Pawar
        `,
        resource_url: null,
      },
    ],
  },
};

const actThree = {
  act: {
    title: 'Act III: Javascript Sprint – Bringing dynamic capabilities',
    order_index: 0,
    repeatable: false,
    milestones: [
      {
        title: 'Plan the Javascript Sprint',
        order_index: 0,
        description: `
*Goal*: Write out all the Javascript functionality your Webpage needs

*Notes*:
> This is surely one of the most exciting parts of you journey in this project.
> Javascript makes all the difference between a screen or a sheet of paper to stare at or a beautiful webpage with style and dynamic
> Try to check with original site as little as possible and only note what needs to be accomplish.
> Go through it one by one and write tickets/notes whatever your system has, for every functionality your site needs to support
> Don't be intimidated by it, most of it seems complicated if you never did it yourself, but most of the time it will be just some lines, because javascript is very powerful
> Assign the tickets evenly between members.
> Try to fit everything in one sprint, but if necessery split it up.
> As you already know, we await your questions in help section.
> But its not rocket science, you can do it!
> (Except you are writting functions for an actuall rocket, but in that case, what are you even doing here? Get me to mars already!?)
        `,
        resource_url: null,
      },
      {
        title: 'Begin the Sprint',
        order_index: 1,
        description: `
*Goal*: Turn all that talk into code!

*Tips*:
> Try to be online regularily to help out your teammates
> Don't be frustrated, sometimes there will be a roadblock or something new, which you don't now.
> Try to solve it yourself or google the problem, but don't be shy to shoot a question in the teamslack or the general channels.
> Avoid asking obvious questions, but chingus are very helpful and you will surely get some answers in the next 24 hours.

*Github*:
> Everybody should work in their own branch, which then can be merged into development, but the team can decide on any given structure they want
> Just don't forget to actually decide on one as a team!

*Patience*:
> Don't expect everybody to be finished at the same time as you, some will take longer the other will be faster.
> There is always some other projects which could sparkle your interest or keep you busy while you are waiting for your teammates to finish.
> Here are some links to get you going:
> https://100dayscss.com/
> https://javascript30.com/
> https://github.com/P1xt/p1xt-guides/blob/master/job-ready-javascript-edition-2.0.md
        `,
        resource_url: null,
      },
      {
        title: 'Sprint Progress Review',
        order_index: 2,
        description: `
*Goal*: Review the team's progress after half the sprint's duration.

*Schedule a Meeting*
> Schedule a time a few days from the start of the sprint to check in with everyone and make sure forward progress is being made by the team.
> This is an opportunity, not a chore! Use this opportunity to speek about your problems, roadblocks and thinks you can't wrap your head about.
> But if there is an issue and it is impossible to find the right time for everyone, don't fret! Just have an asyncronous meeting.
> https://en.wikipedia.org/wiki/Asynchronous_conferencing
> In general it is also necessery to be able to review the code written, so everybody should push the current version to Github.

*Steps*:
> Assess everyone's status in the sprint.
> Discuss any roadblocks that are holding back progress.
> Explore solutions together and construct an actionable plan to move forward.
> Celebrate completed tasks and share the lessons learned in working on them.
> Assess the remaining tasks and take note of how close you are to meeting this sprint's deadline.
        `,
        resource_url: null,
      },
      {
        title: 'Completed Sprint Review, Code Review & Merging',
        order_index: 3,
        description: `
*Goal*: Go over the sprint, reflect on the experience gained and merge everything accomplished.

*Review the code and merge*:
> Cross-review each other's code and prevent merging without review.
> Ask for clarification and add comments wherever needed.
> Openly explain decisions and implementation details.
> Test completed tasks whenever possible and seek out bugs to catch.
> Work on maintaining a consistent style across the team's code.

*Tips - Review*:
> Write detailed pull request notes to maintain a clear history of the project and its progress.
> These will also help team members cross-review your PRs

*Completion of the Sprint*:
> Assess the number of remaining tasks
> Determine why they were left incomplete
> Discuss how the next sprint will be improved by factoring in the lessons learned
> Discuss how the workflow worked to or against your team's advantage
> Discuss any new ideas that stemmed from completing the tasks. Create notes or cards to keep these ideas handy for the future.

*Patience*:
> Yes we know. We mentioned it already. But, as always, working with other bring massive advantages, but some disadvantiges as well.
> Still, we at chingu believe that the sum of your work as a team will be higher than if you work alone!
> Be patient with each other and understand that it's okay to miss a deadline.
> Carry over the remaining tasks and plan better for the next one!
        `,
        resource_url: null,
      },
      {
        title: 'Leaving Act 3',
        order_index: 4,
        description: `
*Goal*: Look out for any bugs or discrepencies in the landing page

*We are not done yet*:
> Feel free to have a second javascript sprint, but try to hit the chingu deadline for an minimum viable product.
> But it is still better to finish after the deadline than not to finish at all!

*We are done indeed!*:
> Good for you, you did it!! We are celebrating with you and would like to express our sincere congratulations!
> It is always the best when a team finishes a project or is at least very close to it
> If you think you have a solid minimum viable product, feel free, hit that button to the next act hard!

*Quote*:
> Getting organized in the normal routines of life and finishing little projects you've started is an important first step toward realizing larger goals.
> If you can't get a handle on the small things, how will you ever get it together to focus on the big things?
> Joyce Meyer

        `,
        resource_url: null,
      },
    ],
  },
};

const actFour = {
  act: {
    title: 'Act IV: Project Closure',
    order_index: 0,
    repeatable: false,
    milestones: [
      {
        title: 'Tidy up your CSS File & Consolidate Rules',
        order_index: 0,
        description: `
*Goal*: Make your CSS file into a finished product and delete all repetition

*Explanation*:
> You remember back at Act 2 where you were told not to think so much about possible rules that are the same in you css files?
> Well, you kinda should now. Chingu Projects are all about the learning experience, but if you got to this milestone you can start to think about the project as a product too.
> In a real scenario it won't be enough to just through together a bunch of css rules and call it a day.
> Your code needs to be professional and easy to use for others as well, because there is no safety that only you will ever touch the code.
> Except you are going to be the next Mark Zuckerberg, but even then you will probably be ashamed if somebody sees your messy files.

*Tips*:
> Take your time, while doing this. It is the perfect review of your work and time to discover how efficient css can be
> Grab a cup of coffee/tee because sometimes it can be quite difficult, especially if this is your first time working on a bigger project.
        `,
        resource_url: null,
      },
      {
        title: 'Learn SASS and optimize your CSS (Optional)',
        order_index: 1,
        description: `
*Goal*: Make your css file easier to understand and shorter

*What is this magic*:
> Sass makes CSS fun again. Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more.
> It's translated to well-formatted, standard CSS using the command line tool or a web-framework plugin.

*Where to learn*:
> http://www.sassshop.com/#/

*But why?*:
> "Oh almighty Wizard, why should I use this Sassy addition?"
> Thats easy: Avoid repetition for colors, borders and everything else. Easy nesting, no more .parent .nav ul li a:hover {}. Reduce complexity.

*Where to get*:
> http://sass-lang.com/

*Tips*:
> This is optional, you don't need to do it, but its recomended.
> Don't let it stop you from shipping your Minimum Viable Product though if you are short on time.
        `,
        resource_url: null,
      },
      {
        title: 'Optimize Javascript',
        order_index: 2,
        description: `
*Goal*: Adding descriptions to javascript functions, making sure everything is optimal and without magic numbers

*Term*:
> Magic numbers’ are numbers that occur multiple time in code without an explicit meaning. They should preferably be replaced by named constants.
> finalPrice = dutyFreePrice + (dutyFreePrice * 0.25); BAD
> var TAX = 0.25; finalPrice = dutyFreePrice + (dutyFreePrice * TAX); GOOD
> The no-magic-numbers rule aims to make code more readable and refactoring easier by ensuring that special numbers are declared as constants to make their meaning explicit.

*Task*:
> Optimize your code as good as possible and avoid repetition
> Someday you might thank yourself for deleting all those nasty magic numbers
> Every function needs a description, thank yourself later

*Tips*:
> As a general rule, functions should be about 18 lines long, if there are longer you can probably make an additional function somewhere to ensure readablity of your code.
> Maybe you cant imagine it now, but in just about 6 month you will surely have written so many lines of code and finished so many projects that you will forget everything in this project!
> This happens even to a grand Wizard like me! That is why it is important to write prezise and clear description for any function in your javascript Code
> This will ensure that even if you go back to it after a year, you will find everything you need fast
        `,
        resource_url: null,
      },
      {
        title: 'Bath in the Glory',
        order_index: 3,
        description: `
*Goal*: Spread your finished page everywhere and make sure you get a lot of fire emojis in slack

*Quote*:
> Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.
> Pele

*ToDo*:
> You should feel well, because you did well!. It is not an every day occasion that a project gets finished even in chingu, so be proud of it.
> Show it to everyone, not only out of a feel of accomplishement, but to also inspire new members and aspiring developers.
> It shows that with enough dedication and hard work you can accomplish everything and be the developer you want to be.
> Now relax from the project, reflect in the next milestone and take the momentum to the next project/cohort/code-thingy and let the keyboard crack :)
        `,
        resource_url: null,
      },
      {
        title: 'Write about your experiences',
        order_index: 4,
        description: `
*Goal*: Every teammember should write a medium article about their experiences. Bonuspoints for a vlog

*Quote*:
> By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.
> Confucius

*Talk*:
> This is the best time to reflect and think about the experience you gained in the last weeks and all the new techniques and tricks you learned.
> This is best done by writting it down. While writting you focus more and tend to write more prezise and clear.
> So by writting everthing down, you will hopefully see a distilled clear image of what you have accomplished and can always go back and remember again
> Especially our mistake and shortcomings are the things we want to correct, and this will not only help yourself but others too.
> There is a reason people still write textbooks in 2018! Through text we can reach everyone who needs to be reached
        `,
        resource_url: null,
      },
      {
        title: 'Let somebody with experience look into your code',
        order_index: 5,
        description: `
*Goal*: Try to find somebody from Tier 3, who would be willing to review your page and give your feedback

*Quote*:
> Being smart does not allow you to see the back of your head. You need a mirror, camera, or another person.
> https://medium.com/@JohnMashni in "The Only 3 Ways to Reinvent Yourself in 2018"

*Reason*:
> It is difficult to understand what you don't know. Even if something works, it is not necessery the best way to do it
> By asking somebody with experience you will probably hear a lot of things you never even thought about it and will improve yourself
> Don't be shy about asking, many people have a great passion for coding and love to teach and help others
> It also never a bad thing to review code from a different person, there is no such thing as "learned everything", even for senior developers
        `,
        resource_url: null,
      },
    ],
  },
};
