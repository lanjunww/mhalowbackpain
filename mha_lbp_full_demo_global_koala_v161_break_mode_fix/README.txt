Open desktop.html for the Mac desktop simulation.

MHA Low Back Pain Full Demo — Global Koala Reminder Version

Open index.html first.

Included pages:
- index.html
- risk-tool.html
- signup.html
- questionnaire2.html
- weekly-plan.html
- reminders.html
- about.html
- mission.html
- team.html
- submissions.html

Reminder logic:
- A Mac-style top bar appears on every page.
- Daily Plan Nudge: default 08:00, says “Your daily back plan is ready. Tap to check today’s first small action.” The notification/toast is clickable and opens weekly-plan.html.
- Long-sitting Koala reminder: default 1 hour. 10 seconds equals 1 demo hour.
- The Koala mood changes at 1h/2h/3h/etc. If the user chooses 3 hours, Koala becomes tired at 1h and 2h but only sends a notification at 3h.
- The Koala widget itself lets the user adjust reminder frequency and risk tone.

- contact-us.html

Fixes in this version:
- team.html now uses root-level assets and matches the MHA site style.
- Contact Us is now a dedicated page instead of pointing to the team page.
- About page cards now point to the correct root-level pages.

Desktop controls: click the green window button or double-click the browser toolbar to maximise/restore Chrome or Safari.

- get-informed.html

Fixes in this version:
- Added a clean Get Informed page for low back pain education.
- Navigation now links Get Informed to get-informed.html.

- get-involved.html

Fixes in this version:
- Added a clean Get Involved page focused on community feedback, webinars, volunteering, donation and advocacy.
- Navigation now links Get Involved to get-involved.html.

V7 changes:
- questionnaire2.html now sends users to education-result.html after generating the plan.
- education-result.html explains why the risk factors matter before users enter the weekly plan.
- weekly-plan.html now uses the user name where available, includes collapsible mental health priority, day tabs, 3 activities per day, checkboxes, detail panel, precautions and video placeholders.
- The mental health collapse button is now a clean minus/plus without the ugly circle.

V8 changes:
- weekly-plan.html is now a pure weekly plan page.
- Education/risk-factor explanation stays only in education-result.html, which appears after questionnaire + reminders and before weekly plan.
- Removed mental health priority and education-style sections from weekly-plan.html.

V9 fix:
- Fixed questionnaire2.html actual redirect in renderRecs.
- After questionnaire + reminder settings, users now go to education-result.html first, then weekly-plan.html.

V11 changes:
- Logout now clears all mha.* user data, including Koala timer, Daily Plan Nudge, user profile, risk result and weekly plan progress.
- Koala widget only appears when there is an active logged-in session and sitting reminders are enabled.
- weekly-plan.html now has a first-use / logged-out state: “No plan yet”, with a direct button to start the first risk questionnaire.
- Login/Sign-up profile saving now happens on form submit, not every link/button click.

V12 change:
- Removed the “Log in / sign up” button from the Weekly Plan “No plan yet” state.
- The first-use / logged-out Weekly Plan page now has one clear action only: Start risk tool.

V13 changes:
- Clicking “Test my risk now” on the homepage now opens a consent and privacy modal before entering risk-tool.html.
- The modal explains that the risk tool is educational/self-management support, not diagnosis or emergency advice.
- Accepting the homepage consent suppresses the duplicate risk-tool privacy overlay for that session/device.

V14 changes:
- Top Donate Now button width aligned with Login / Sign Up buttons.
- Koala widget now shows auto risk level from the user's risk result instead of allowing manual risk adjustment.
- Koala sitting notifications now use the user's risk level, today's generated weekly plan, and risk/lifestyle clusters to create personalised nudges.
- Weekly plan restored to the richer customisable version with rest-day dots, add-activity modal, and 8-week progress loop.
- Low-risk users get two rest days; medium/high users keep one rest day.
- Add-activity modal now filters activities by the user's flagged clusters and includes activities from the Risk & Lifestyle Cluster document.
- Weekly plan header now shows a compact flat avatar based on gender selection; if gender is not stated, it shows the Koala avatar.
- Sign-up page now includes a virtual-email hint for demo use.
- Logout now also clears old weekly-plan underscore keys such as mha_added_*, mha_done_*, and mha_reminder.

V15 changes:
- Account-created success page now makes “Continue to your plan” and “Skip & generate weekly plan” the same visual size.
- Sign-up email hint now emphasises “It does not need to be a real inbox.” in MHA navy blue and bold.

V17 changes:
- Account-created buttons are vertical again, equal sized, and no longer overflow.
- Header phone number is constrained to the same style/size as the normal site header, even after login.
- Weekly Plan add-activity modal now strictly filters by flagged clusters. Smoking-only users see Cluster D Smoking activities: Smoking & back, Three minutes, Walk first, Quit support.
- Weekly Plan activity rows now support separate behaviour: checkbox toggles completion; clicking the activity body expands/collapses tutorial and video details.

V18 changes:
- Restored the working weekly-plan renderer so the weekly plan no longer appears blank.
- Fixed the header phone-number yellow block by resetting the exact .phone-line .num styles, avoiding conflict with page-level .num styles.
- Kept smoking-only cluster filtering: the add-activity modal shows Cluster D Smoking activities when smoking is the flagged factor.
- Kept checkbox vs row click separation: checkbox marks complete; row expands/collapses tutorial and reference video.

V19 changes:
- Restored weekly-plan.html from the known working rich weekly plan file.
- Added first-use/logged-out “No plan yet” section, so weekly-plan.html never appears blank.
- Kept cluster-filtered add-activity modal and smoking-only Cluster D activities.
- Added activity-row tutorial expand/collapse without interfering with checkbox completion.
- Added stronger header phone-number reset and renamed education page factor numbers to prevent yellow phone-number style collisions.

V20 changes:
- Header Donate Now now matches the right auth button width, instead of stretching to the full auth row.
- Weekly plan activity interaction fixed:
  checkbox = complete / incomplete only;
  activity text/body = expand tutorial + video;
  clicking the activity body again collapses the tutorial.

V21 changes:
- Activity tutorial dropdown redesigned into a cleaner horizontal layout: text/tips on the left and video card on the right.
- Risk factors and weekly focus suggestions are displayed in a compact two-column layout so paired factors do not take excessive vertical space.

V22 changes:
- Reverted education-result.html to its original layout by removing the v21 compact factor/focus override.
- Weekly plan header now displays the user’s name as “[Name]’s Weekly Plan” and shows a flat avatar beside it.
- Avatar uses gender from the questionnaire: Male = male avatar, Female = female avatar, otherwise Koala avatar.
- Weekly plan risk factors and focus suggestions are paired in horizontal cards on the weekly-plan page.

V23 changes:
- Weekly plan risk factors and focus suggestions are now two separate horizontal modules.
- This affects weekly-plan.html only; education-result.html remains unchanged.
- Left module: risk level + key factors. Right module: this week's focus suggestions.

V24 changes:
- Reduced weekly plan module title font size so “Your key risk factors” and “This week’s focus suggestions” stay on one line in the two horizontal modules.

V25 changes:
- After reminders/follow-up, the flow now goes directly to weekly-plan.html instead of education-result.html.
- weekly-plan.html now has two tabs: Weekly Plan on the left (default) and Risk Insights on the right.
- Risk Insights uses the uploaded MHA education content to explain the user's flagged factors and connect them to practical weekly-plan actions.

V26 changes:
- Weekly Plan tab: risk factors and focus suggestions are stacked vertically, with each section using two-column card grids.
- Risk Insights tab: redesigned into a professional page with collapsible mental-health strip, risk-factor summary, weekly suggestions, and expandable deep-dive accordions.
- Risk Insights copy has been expanded and simplified from the uploaded MHA education document.

V27 changes:
- Reduced the gap between the Weekly Plan/Risk Insights tab bar and the content below.
- Set tabs, Weekly Plan content, and Risk Insights content to the same max width.
- Restyled Risk Insights hero to match the Weekly Plan hero style more closely.
- Fixed accordion title/subtitle spacing so text no longer sticks together.
- Moved Mental Health Priority above risk factors in the Weekly Plan tab and matched the Risk Insights mental-health strip style.

V28 changes:
- Forced Weekly Plan/Risk Insights tabs, Weekly Plan content and Risk Insights content to the same shared width.
- Removed the large gap between the tab switcher and the page content by joining the tab bar to the content card.
- Mental Health Priority now defaults open with a small triangle control; it uses 🚨 consistently in Weekly Plan and Risk Insights.
- Weekly Plan risk factors and focus suggestions are now collapsible sections with right-side triangle arrows, defaulting open.

V29 changes:
- Risk Insights now shares the exact same first-use/logged-out “No plan yet” state as Weekly Plan.
- Refined the “No plan yet” card into a two-column layout: action copy on the left, next-step overview on the right.
- Added a subtle top-left watermark on every page: “AI-assisted demo · Codex + Claude Code vibe-coded · for showcase only”.

V30 changes:
- Moved the AI-assisted demo watermark lower so it does not overlap the macOS/browser top bar.
- Rebuilt the Weekly Plan/Risk Insights first-use state so the “No plan yet” card reliably appears directly under the tabs.
- Risk Insights tab now also keeps the same No Plan state when the user has not unlocked a plan.

V31 changes:
- Fixed Weekly Plan / Risk Insights tab clicks in the no-plan state.
- When no plan is unlocked, clicking either tab now updates the active tab visually while keeping the same No Plan card visible.

V32 changes:
- Donate Now now links to get-involved.html.
- Header phone number 1800 263 265 now uses the same small font size as “B.A.M. Helpline”.

V32b changes:
- Patched both shared and standalone header scripts: Donate Now now links to get-involved.html.
- Added exact .stack .num / .stack .lbl CSS so the phone number and B.A.M. Helpline use the same small font size.

V33 changes:
- Mental Health Priority is now based on questionnaire answers only:
  anxiety/depression = yes OR back-pain episodes = 11+ in last 5 years.
- Removed "(collapsed)" wording; the module simply shows the title and a triangle.
- Weekly Plan and Risk Insights now use the exact same Risk Factors / Focus Suggestions module format.
- All three collapsible modules use the same triangle logic as the Deep Dive accordions.

V34 changes:
- Fixed major duplication bug after adding a custom activity: renderPlan now clears the Weekly Plan root before rebuilding, and the add-activity picker no longer calls renderPlan unnecessarily.
- Fixed Risk Insights triangle clicks: toggles now use the closest module instead of duplicate IDs across tabs.
- Added robust accordion binding for Risk Insights deep-dive cards.

V35 changes:
- Fixed past-day custom activity bug: activities added from a past day now save to that selected date instead of today.
- Triangle indicators now use one ▲ symbol and rotate exactly 180 degrees on collapse, avoiding 360-degree over-rotation or conflicting arrow swaps.

V36 changes:
- signup.html now changes copy and visual state based on Sign up vs Log in mode.
- Header Log in links open signup.html?mode=login, while Sign up links open signup.html?mode=signup.
- The Create your free account page now updates title, description, side panel text, note and CTA according to the selected mode.

V37 changes:
- Fixed the Weekly Plan / Risk Insights tab switcher being unresponsive.
- Restored the missing no-plan tab switch helper and added a robust fallback binder that re-attaches tab click handlers after page load.
- Raised the tab bar click layer to prevent it being covered by nearby panels.

V38 changes:
- Fixed header Log in opening the create-account state. Log in now opens signup.html?mode=login and forces the page into Log in mode.
- Fixed the Sign up tab so it always switches back to the create-account wording.
- Added robust URL-mode detection for ?mode=login, ?auth=login, #login and #signin.

V39 changes:
- Fixed Create account / Log in page initial state: signup.html?mode=login now actively changes the title, copy, side panel and button to Log in mode.
- Fixed Risk Tool Mental Health Priority logic: it now displays only when q9 anxiety/depression is Yes OR q10 is 11+ episodes; the copy changes for anxiety-only, episodes-only, or both.
- Fixed Weekly Plan / Risk Insights tabs with inline onclick and delegated fallback handlers so the switcher remains clickable even if other scripts or overlays interfere.

V40 changes:
- signup.html hero now changes with auth mode: Log in shows “Log in to continue” and a returning-user subtitle; Sign up shows “Create your free account”.
- risk-tool.html Mental Health Priority now uses the same card/triangle style as Weekly Plan and Risk Insights.

V41 changes:
- Risk Insights Deep Dive is richer and split into two groups:
  1) Your flagged factors (dynamic, based on questionnaire result)
  2) General context information (fixed: back pain history, work/load, sleep, age and gender)
- Deep Dive cards now include more plain-language detail and more practical actions, based on the MHA education document.

V42 changes:
- Fixed the one-second “No plan yet” flash on Weekly Plan load by adding an anti-flicker loading state.
- The Weekly Plan / Risk Insights content stays hidden until JS has checked whether a saved plan exists, then the correct state is shown.

V43 changes:
- Weekly Plan and Risk Insights summary now remove the separate “Your key risk factors” block.
- The remaining summary is “This week’s focus” with the Low/Medium/High risk pill at the front; “suggestions” wording is removed.
- Reminder buttons now use a single-click robust toggle with busy-state protection and demo-friendly notification permission handling.
- Create account page now includes “Already have an account? Skip account step →”, which creates a demo existing-account session and sends the user directly into the personalised follow-up questionnaire flow.

V44 changes:
- Restored reminder account requirement: reminders cannot be turned on unless a valid MHA demo session exists. The v43 demo auto-session fallback was removed.
- Kept the one-click Off → On fix by using busy-state protection and notification-permission fallback, without bypassing login.
- Fixed signup-first flow: after creating an account, users go to the first-layer Low Back Pain risk tool if they have not completed it yet; only users with saved risk-tool answers continue to the personalised follow-up.
- Existing-account skip now also routes to the risk tool first when no risk result exists.

V45 changes:
- Fixed signup-first flow more strictly: creating an account only goes to personalised follow-up if the user explicitly came from the completed risk tool in this same flow.
- Stale localStorage risk results no longer make a fresh signup jump directly to follow-up.
- Risk-tool “Create Free Account” now marks a deliberate from-risk handoff.
- Removed the remembered-session auto-redirect on signup.html and added an anti-flicker loading class to avoid brief wrong screens.

V46 changes:
- Added get-supported.html with the requested MHA support/history content and four support cards: Helpline, Managing Your Pain, Peer Support Groups, MSK Kids.
- Updated About Us with the requested welcome/history copy and card links for Mission, Team, History, Contact, Submissions, Organisational Reports, and What’s On.
- Updated the header Get Supported link to open get-supported.html.

V47 changes:
- Weekly Plan top hero now uses the same user/avatar style as the plan card.
- This week’s focus now filters/normalises blank or duplicate risk-factor labels so stray empty cards do not appear.
- Weekly progress now updates immediately when activities are checked, added or removed; added activities increase the denominator.
- Upcoming days can now use the + button and open activity tutorials, but their checkboxes remain locked/grey until the day arrives.
- Schedule activity names are more friendly/fun while the follow-up questionnaire wording stays unchanged.

V48 changes:
- Weekly Plan generated activity titles are longer, more playful short phrases.
- Each generated activity title now keeps the original activity wording, such as Walking, Swimming, Yoga / Pilates, Strength training, Cycling, and Team sports.
- Follow-up questionnaire option wording is unchanged; only the scheduled plan display labels are updated.

V49 changes:
- About Us and Get Supported card style cleaned up: lighter card borders, less bold headings, and navy Learn More buttons with white text.
- Reminder On/Off buttons changed to common pill toggle switches with a sliding knob and ON/OFF label.

V50 changes:
- Fixed Weekly Plan progress not updating for same-day/today checkboxes in some states.
- Rest days with user-added activities now count toward weekly progress.
- Progress refresh is now forced immediately, on the next animation frame, and after a short delay to avoid stale same-day UI reads.

V51 changes:
- Fixed weekly progress calculation: rest days are no longer skipped if they contain added/checkable activities.
- Fixed activity title: “Strength training — mini-mission for your back”.
- Removed the Mac-style top status bar. Koala is now a right-side floating rail that opens on hover or click.
- Removed Mac-specific notification wording.
- Contact form first/last name defaults are blank.

V52 changes:
- Fixed the Weekly Plan progress bug caused by an accidental recursive refresh function.
- Progress now rebuilds properly when checking/unchecking Today or Past activities and when adding/removing activities.
- Week-loop bars now count user-added activities on rest days.
- Right-side mini koala no longer bounces; it only changes facial expression/state. The larger expanded koala still animates.
- Added a compact DEMO TIME / REAL TIME switch in the Koala buddy controls. Demo time keeps 10 seconds = 1 hour; real time uses real hours.
- Fixed activity title punctuation: Strength training — mini-mission for your back.

V53 changes:
- Right-side collapsed Koala rail is now a narrow vertical column: koala icon, Koala label, and timer text are stacked in one column.
- DEMO TIME / REAL TIME button moved beside the sitting timer in the expanded buddy panel, instead of under START BREAK / RESET.

V54 changes:
- Default/rest-day activity titles now use playful, short-phrase labels consistent with custom activities:
  Gentle back reset — tiny moves, big relief; Core confidence quest — steady, simple strength; Recovery flow — calm down, loosen up.
- Older saved activity titles are also polished at render time.
- AI-assisted demo watermark moved upward to the top of the viewport.

V55 changes:
- Personalised follow-up reminder settings now use the same ON/OFF pill toggle switches as the main Reminders page.
- Reminder toggle JavaScript now updates the switch knob and ON/OFF text without destroying the switch markup.
- Follow-up Koala reminder copy now says the Koala docks on the right side, consistent with the current widget.

V56 changes:
- Personalised follow-up reminder setting status text now matches the main Reminders page style more closely.
- Follow-up pending/success/off messages are normalised for daily plan and Koala sitting reminders.
- This week’s focus grid is forced to a cleaner two-card row layout on desktop and one-card layout on mobile.

V57 changes:
- Removed the duplicate questionnaire-page “Your privacy matters” modal.
- The questionnaire start page now uses the same “Consent and privacy notice” modal content/style as the homepage version.
- Homepage CTA now links directly to the questionnaire so the consent popup appears only once at the questionnaire start.
- The yellow inline privacy note at the start of the questionnaire is preserved.

V58 changes:
- Consent and privacy notice modal on risk-tool.html is smaller and less visually overwhelming.
- “Don’t show this again on this device” is now visual only for demo purposes: the consent notice always appears when starting the questionnaire page.

- Koala widget controls updated: START BREAK now sits beside START SITTING, while DEMO TIME and RESET are stacked in the right column at matching widths.
- Added START SITTING button to begin a fresh sitting session immediately without taking a break.

- Koala widget layout updated again: DEMO TIME and RESET now sit beside the timer with matching widths.
- Bottom action row now contains only START BREAK and START SITTING.

V61 changes:
- START BREAK now enters a persistent break mode instead of automatically returning to sitting after the old short recovery timer.
- While on break, sitting notifications are paused and the widget says “break in progress”.
- START SITTING and RESET both begin a fresh sitting session.
