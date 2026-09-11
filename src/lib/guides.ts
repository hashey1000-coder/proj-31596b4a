export interface Guide {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  lastReviewed: string;
  content: string;
}

export const GUIDES: Guide[] = [
  {
    slug: "ae-or-utc",
    title: "A&E vs Urgent Treatment Centre — Picking the Right Door",
    description: "A side-by-side breakdown of when A&E is the right call and when a UTC will get you treated faster.",
    category: "Choosing a Service",
    readTime: "7 min read",
    lastReviewed: "August 2026",
    content: `
## A&E is for emergencies

Accident & Emergency departments exist for conditions that could be life-threatening or need specialist hospital resources straight away. They are staffed around the clock with emergency physicians, nurses and support teams who can handle the most serious medical situations. If you are not sure whether your problem counts as an emergency, it helps to think about the resources you might need: if the answer involves resuscitation equipment, an operating theatre, a blood bank or specialist imaging within minutes, A&E is the place.

Head to A&E if you are dealing with any of the following:

- **Chest pain or tightness** that will not go away, particularly if it radiates to the arm, jaw or back
- **Breathing problems** — gasping, turning blue, unable to speak full sentences or a feeling of suffocation
- **Heavy bleeding** you cannot control with direct pressure, or blood loss that is making you feel faint
- **Signs of stroke** — sudden face drooping, arm weakness, slurred speech (think FAST: Face, Arms, Speech, Time)
- **Unconsciousness or fitting** that lasts more than five minutes, or repeated seizures without recovery between them
- **Major trauma** — deep wounds, compound fractures where bone is visible, serious head injuries with altered consciousness
- **Severe allergic reactions** — swollen throat, difficulty breathing after a sting, food or medication, rapidly spreading hives with breathing difficulty
- **Suspected poisoning or overdose** — whether accidental or deliberate, especially if consciousness is impaired

When in any doubt about severity, **dial 999** rather than driving yourself. Paramedics can begin treatment on the way to hospital and will alert the department so the right team is ready when you arrive. You can read more about when an ambulance is the right call in our guide on [recognising a true medical emergency](/guides/when-to-call-999/).

## UTCs handle the urgent-but-not-critical

Urgent Treatment Centres (also called Walk-in Centres or Minor Injuries Units in some areas) are staffed to deal with problems that need attention today but do not require the full resources of an emergency department. They are usually led by a mix of GPs, emergency nurse practitioners and sometimes paramedic practitioners. Most UTCs can X-ray, stitch wounds, apply plaster casts and prescribe a range of medications.

Conditions suitable for a UTC include:

- **Lacerations** likely to need closure with stitches, glue or strips, but without heavy blood loss or damage to tendons and nerves
- **Sprains, strains and suspected simple fractures** — twisted ankles, jammed fingers, wrist injuries from a fall where the limb is still roughly aligned
- **Small-area burns and scalds** that are not chemical, electrical or full-thickness — for more detail on when a burn needs A&E see our [burns and scalds guide](/guides/burns-first-aid/)
- **Animal or insect bites** that look infected or need cleaning, where the wound is not to the face or near a joint
- **Minor head knocks** where the person stayed conscious throughout, has no vomiting or confusion, and is over the age of one — our [head injury guide](/guides/head-injury-guide/) explains the red flags that mean A&E instead
- **Eye problems** — foreign bodies on the surface, sudden redness, mild blunt trauma without vision loss
- **Suspected urinary or ear infections** needing same-day assessment and antibiotics
- **Abscesses** that need draining but are not on the face or near the spine

If you are unsure whether a musculoskeletal injury is a sprain or a break, our guide on [fractures and sprains](/guides/fractures-sprains-guide/) walks through the signs that help you decide.

## How much time does the right choice save?

Across the country, average waits at UTCs tend to be roughly half what they are in busy A&E departments. During peak evening hours the difference can be even larger — a two-hour wait at A&E versus thirty minutes at a nearby UTC is not unusual. You can check current waits at departments near you using our [live comparison tool](/near-me/).

Choosing a UTC for a qualifying condition can easily save you two or three hours. It also frees up capacity in A&E for the patients who genuinely need it, which indirectly helps everyone. You can also time your visit for the quietest period — our guide on [the best and worst hours to arrive](/guides/busiest-times-ae/) shows when departments are typically emptiest.

## What UTCs cannot do

It is worth knowing the limits. Most UTCs cannot handle:

- Conditions requiring emergency surgery or access to an operating theatre
- Problems needing CT or MRI scans (they usually only have X-ray)
- Patients who may need admission to a hospital ward
- Children under a certain age (varies by site — some see all ages, others only over-twos)
- Psychiatric emergencies requiring specialist mental health assessment
- Conditions needing blood transfusion or intravenous antibiotics

If you arrive at a UTC and staff decide your condition exceeds their capability, they will arrange transfer to the nearest A&E. You will not lose your place in the system — the referral information travels with you.

## Still not sure? Ring 111 first

[NHS 111](/guides/nhs-111-guide/) advisors walk you through a symptom checker, then either:

- Recommend self-care at home
- Point you to a pharmacy
- Book you a same-day GP slot
- Reserve a timed place at a nearby UTC or even A&E

Calling 111 before setting off is almost never wasted time. Even if the advice is "go to A&E," having a triage reference from 111 can speed up your registration when you arrive.

## What happens if you go to the wrong one?

A common worry is making the wrong choice and wasting time. In practice, the system has safety nets in either direction:

**If you go to A&E with a UTC-suitable condition,** you will still be seen and treated — but you will wait longer because your triage category will be lower than the emergency patients around you. You will not be turned away, but the department is not optimised for your type of problem. In some hospitals, the A&E team may redirect you to an on-site or nearby UTC if one is available.

**If you go to a UTC with a condition that needs A&E,** clinical staff will assess you and arrange transfer. They will call ahead so the A&E team is expecting you, and your clinical information travels with you. You do not start from scratch. The UTC assessment may even speed up your A&E experience because some of the initial workup is already done.

The worst outcome is usually delay, not danger. But minimising delay is exactly why choosing correctly matters — especially when you are in pain or distress.

## Real-world examples

To make the distinction concrete:

**Go to A&E:** A 55-year-old with crushing chest pain and sweating. A child who fell from a climbing frame and is now unconscious. Someone who has taken an overdose. A person with sudden weakness on one side of their body.

**Go to a UTC:** A 30-year-old who twisted their ankle playing football and cannot weight-bear. A child with a deep cut on their chin that needs gluing or stitching but is otherwise alert and well. Someone with a painful ear that has been getting worse over two days. An adult with a suspected simple wrist fracture after a fall — no deformity, some movement possible.

**See a pharmacist or GP:** A persistent cough without breathlessness. A mild rash without fever. A urinary tract infection in a woman under 65. Hay fever symptoms.

**Call 111 to decide:** Abdominal pain that has been present for several hours but is not severe. A child with a temperature who is eating and drinking but seems more tired than usual. An injury that happened yesterday and is not improving but is not worsening either.

## How to find your nearest UTC

Not every area calls them the same thing. You may see Minor Injuries Unit, Walk-in Centre, Urgent Care Centre or Urgent Treatment Centre — they all provide broadly similar services. Use our [hospital search](/hospitals/) to find departments near you, or browse by [region](/regions/) to compare options. Each listing shows whether the department is classified as AE, UTC or MIU.

Some UTCs require an appointment (bookable through [111](/guides/nhs-111-guide/)), while others accept walk-ins. Opening hours vary — most operate at least 12 hours a day, 7 days a week, but not all are open overnight. Check before you travel, especially late at night when some UTCs close. Our guide on [out-of-hours care options](/guides/out-of-hours-care/) covers what is available when the full range of services is not operating.

If you are unsure whether a UTC near you is currently open, browse our [regions directory](/regions/) to compare services in your area and their operating hours.

## The golden rule

**If the problem could threaten life or limb, go to A&E.** For everything else, a UTC is almost always quicker — and you free up A&E capacity for the patients who need it most. When in doubt about the severity, our guide on [practical ways to shorten your A&E time](/guides/reduce-ae-wait/) covers how to make the right call and what to prepare before you leave.
`,
  },
  {
    slug: "reduce-ae-wait",
    title: "Practical Ways to Shorten Your Time in A&E",
    description: "Actionable steps you can take before and during an A&E visit to keep your total time as short as possible.",
    category: "Patient Tips",
    readTime: "7 min read",
    lastReviewed: "August 2026",
    content: `
## Before leaving home

The biggest factor in how long your A&E visit takes is whether A&E is the right destination in the first place. Getting that decision right can save you more time than every other tip on this page combined.

### 1. Ask whether A&E is actually the right destination

Plenty of conditions can be dealt with elsewhere in less time:

- **Community pharmacy** — allergies, skin rashes, cold and flu symptoms, minor eye irritation, hay fever, cystitis in women under 65, athlete's foot and many more. Pharmacists are trained clinicians and can prescribe a growing range of medications directly.
- **Your GP** — anything that can safely wait for a same-day or next-day appointment. Many practices now offer same-day urgent slots if you call at opening time.
- **NHS 111** — when you need advice out of hours or are unsure where to go. Our [full guide to 111](/guides/nhs-111-guide/) explains exactly what happens when you call and how it can cut your wait.
- **Urgent Treatment Centre** — fractures, sprains, minor burns, wounds needing stitches, ear and urinary infections. Our guide on [A&E vs UTC](/guides/ae-or-utc/) explains the difference in detail.

If you have already decided A&E is necessary — because the condition is genuinely life-threatening or you need specialist emergency resources — the rest of this guide will help you minimise your time there.

### 2. Compare departments on this site

Two hospitals ten miles apart can have wildly different queue lengths at the same moment. A slightly longer drive to a quieter department often pays off many times over in reduced waiting. Use our [live wait time comparison](/near-me/) to check current queues before you set off, or browse the [full hospitals list](/hospitals/) to compare all departments side by side.

Bear in mind that the displayed wait time is the typical time in department — the time from arrival to discharge or admission. A department showing 90 minutes will generally get you in and out faster than one showing 240 minutes, even accounting for a 20-minute longer drive.

### 3. Choose your timing carefully

If your condition allows some flexibility about when you go, timing your arrival can make a significant difference. Departments are emptiest between roughly **6 am and 9 am** every day. The worst windows are:

- Monday mornings — a rush of patients whose problems built up over the weekend
- Weekday evenings from 6 pm to 10 pm — when people finish work and arrive with conditions they delayed during the day
- Friday and Saturday nights after pub closing — alcohol-related injuries and incidents cluster here

Our dedicated guide on [the best and worst hours to arrive](/guides/busiest-times-ae/) breaks this down day by day with data-backed analysis of when queues peak and trough across the week and through the seasons.

### 4. Pack before you leave

You can save yourself discomfort and administrative delays by preparing properly. Our [complete checklist](/guides/what-to-bring-ae/) covers everything, but the essentials are:

- A list of **every medication you currently take** (or photographs of the boxes). This is one of the most frequent questions clinicians ask, and having the answer ready speeds up your assessment.
- A brief note of **allergies and major past illnesses or operations**
- Your **NHS number** if you have it to hand — it lets staff pull your records instantly
- **Photo ID** is not required but can help if there are duplicate patient records
- A **phone charger** and something to eat and drink — departments can be slow, and vending machines may be limited

## Once you arrive

### 5. Know how triage works

Understanding the triage system helps set realistic expectations and reduces frustration. Staff assess every patient on arrival and assign a clinical priority category. Our [detailed triage guide](/guides/triage-explained/) covers the full system, but in summary:

- **Immediate** — resuscitation bay, seen at once
- **Very urgent** — target within 10 minutes
- **Urgent** — target within 60 minutes
- **Standard** — target within 120 minutes
- **Non-urgent** — target within 240 minutes

Arrival time does not determine the order you are seen; clinical need does. A patient who walks in after you but is assessed as more urgent will legitimately be seen first. This is not queue-jumping — it is the system working correctly.

### 6. Be clear and concise at registration

When you first speak to the receptionist or triage nurse, give them a focused summary: what happened, when it started, and what has changed since. Avoid lengthy backstories at this stage — there will be time for a full history when you see the treating clinician. A clear initial summary helps the triage nurse categorise you accurately, which means you get the right priority.

### 7. Flag any change in your symptoms

If you start feeling significantly worse while you are waiting — new pain, dizziness, vomiting, confusion, spreading rash, chest tightness — **walk to the desk and say so immediately**. You may be re-assessed and moved to a higher priority. Do not assume staff will notice changes from across the waiting room; departments are busy and a verbal alert is the fastest route to re-assessment.

### 8. Use the wait productively

While you wait, there are practical things you can do:

- Write down a timeline of your symptoms — when they started, what made them better or worse, what you have already tried
- Note questions you want to ask the doctor
- If you are accompanying someone, offer to fetch their medication list from home or contact their GP surgery for records
- Stay hydrated and eat if you can — low blood sugar and dehydration can make symptoms worse and cloud your communication with clinicians

### 9. Understand the pauses between stages

A common source of frustration is that A&E involves multiple sequential waits, not one single queue. You wait to be triaged, then to see a clinician, then for test results, then for a decision. Each stage has its own queue. Knowing this in advance helps set expectations. Our guide on [what happens during an A&E visit](/guides/what-happens-in-ae/) walks through every stage so you know what comes next.

### 10. Know who to ask for updates

If you have been waiting for a long time without any communication, it is reasonable to ask for an update. Approach the reception desk or the triage nurse and ask: "Can you tell me roughly where I am in the queue and how long the wait is likely to be?" Staff may not be able to give a precise answer, but they can tell you whether there is a delay, whether the department is dealing with emergencies, or whether your results are still pending. Asking politely and periodically is not a nuisance — it is good communication.

### 11. Manage expectations for companions

If you have brought someone with you — a partner, parent, friend — brief them on what to expect. Long waits, sequential stages, and occasional re-prioritisation can be frustrating for companions who do not understand the system. A companion who understands the process is more supportive and less likely to create tension with staff. Share our guide on [how triage works](/guides/triage-explained/) while you wait so they understand why you may not be seen in arrival order.

### 12. Stay contactable

If you step away from the waiting area — to use the bathroom, get fresh air, or visit the hospital shop — tell reception so they know where to find you. Keep your phone charged and audible. Some departments use electronic boards or text-message alerts to call patients; others use verbal announcements. If you miss your call and staff cannot find you, you may be moved to the back of the queue within your triage category.

## After treatment

### 10. Ask clear discharge questions

Before you leave, make sure you understand:

- What diagnosis or working diagnosis you have been given
- What medications have been prescribed and how to take them
- What symptoms should prompt a return to A&E or a visit to your GP
- Whether any follow-up appointments have been arranged
- Whether you need a sick note

Getting clear answers at discharge prevents unnecessary return visits, which saves both your time and the department's capacity. Our guide on [what happens after A&E discharge](/guides/after-ae-discharge/) covers follow-up care in detail.

### 11. Understand your rights while waiting

You have the right to pain relief while waiting, to be informed about your triage category, and to speak up if your condition changes. If your symptoms worsen in the waiting room, tell the triage nurse immediately — you will be re-assessed. Our [patient rights guide](/guides/ae-patient-rights/) explains what you are entitled to throughout your visit.

## The single most impactful step

Choosing the **right service for your condition** beats every other tip on this page. A&E is built for emergencies; for anything else there is almost certainly a faster route. If in doubt, [call 111](/guides/nhs-111-guide/) before you set off — it costs you five minutes on the phone and can redirect you to a service with a fraction of the wait. And always [check live wait times](/near-me/) before choosing which department to drive to.
`,
  },
  {
    slug: "what-happens-in-ae",
    title: "Your First A&E Visit: What to Expect Step by Step",
    description: "A plain-English walkthrough of every stage from walking through the door to going home or being admitted.",
    category: "Understanding A&E",
    readTime: "8 min read",
    lastReviewed: "August 2026",
    content: `
## Overview

Walking into an Accident & Emergency department for the first time can be overwhelming. The environment is clinical and busy, there are multiple waiting areas, and the process involves several stages that are not always explained clearly. This guide takes you through every step from arrival to departure so you know what to expect and can prepare accordingly.

If you are bringing a child, our [parent's guide to A&E](/guides/children-ae-guide/) covers additional considerations specific to paediatric departments. For older adults, our [elderly A&E guide](/guides/elderly-ae-guide/) addresses mobility, medication and communication concerns.

## Stage 1 — Arriving and checking in

When you walk through the main entrance, look for the reception desk. In busy departments there may be a short queue. A receptionist will ask for your basic details:

- Full name and date of birth
- Home address and a contact phone number
- NHS number (if you know it — do not worry if you do not)
- GP surgery name
- A brief description of why you are here

If paramedics brought you in by ambulance, they handle this handover directly with the clinical team. You skip reception entirely and are taken into the department by the ambulance crew, who pass your details and observations to the receiving nurse.

It is worth having your information ready before you reach the desk. Our [what to bring guide](/guides/what-to-bring-ae/) covers the full list of useful documents and items.

## Stage 2 — Triage assessment

A senior nurse — usually called the triage nurse — will see you shortly after check-in. The national target is within 15 minutes of arrival, though it can be faster or slower depending on how busy the department is. During triage, the nurse will:

- Measure your vital signs: blood pressure, pulse rate, temperature, blood-oxygen level (using a small clip on your finger) and respiratory rate
- Ask targeted questions about your symptoms: when they started, how they have changed, what makes them better or worse
- Ask about your medical history, current medications and allergies
- Examine the affected area if appropriate

Based on this assessment, you receive a clinical priority category. This category — not the clock on the wall or your position in any physical queue — determines when a doctor or advanced practitioner sees you. Our [triage guide](/guides/triage-explained/) explains each category in detail, including typical wait targets for each level.

It is important to be honest and specific during triage. Downplaying your symptoms might result in a lower priority than your condition warrants; exaggerating them can lead to tests and interventions you do not need.

## Stage 3 — The waiting room

After triage, you return to the waiting room until a clinician becomes available for your priority level. This is often the longest single wait in the process, and a few things are worth knowing:

**Your place in the order** depends on your triage category, when you were triaged relative to others in the same category, and how many clinicians are available. Two patients triaged at the same level will generally be seen in arrival order, but a new arrival assessed as more urgent will rightly be seen first.

**You can step out briefly** — for the toilet, to get fresh air or to fetch something from the car — but tell reception before you go so they know where to find you. If your name is called while you are away, staff will usually try once more before moving on.

**If your symptoms change** for the worse while you are waiting — new chest pain, sudden dizziness, vomiting, spreading numbness, worsening breathing — **tell staff immediately**. Walk to the triage desk and explain what has changed. You may be re-assessed and moved to a higher priority. Do not sit and wait in the hope that someone will notice from across the room.

**Expect the wait to feel longer than it is.** Hospitals are stressful environments, and anxiety stretches the perception of time. Having something to occupy you — a book, a podcast, a phone charger — helps. Our guide on [reducing your A&E wait](/guides/reduce-ae-wait/) has practical tips for managing the time productively.

**Accompaniment.** You are entitled to have someone with you for support. If you are a child, a parent or legal guardian should stay. Some departments limit the number of visitors in the waiting room during busy periods, but a single accompanying person is almost always allowed.

## Stage 4 — Clinical assessment and treatment

When your turn comes, a doctor, emergency nurse practitioner or physician associate will call you through. You may be taken to a curtained cubicle, a private room, or an assessment bay depending on your condition and what is available.

The clinician will take a more detailed history than triage, asking about:

- The exact timeline and nature of your symptoms
- Your full medical history, including operations, chronic conditions and family history
- All current medications, doses and when you last took them
- Allergies — both medications and other substances
- Social context — who you live with, whether you can manage at home, whether you drove yourself

They will then examine you and may order investigations:

- **Blood tests** — a nurse or phlebotomist takes samples, which are sent to the hospital laboratory. Results typically come back within 30 to 90 minutes depending on what was ordered.
- **X-rays** — you may be sent to the radiology department within the hospital. Wait times vary but are typically 15 to 45 minutes for the X-ray itself, with results reviewed shortly after.
- **ECGs** — a quick heart tracing done at the bedside, results available immediately
- **CT or MRI scans** — less common in A&E, reserved for suspected strokes, significant head injuries, pulmonary embolisms and similar. These take longer to arrange.
- **Urine or swab samples** — for suspected infections

The clinician may also begin immediate treatment: pain relief, wound cleaning and closure, splinting a fracture, starting intravenous fluids or medications.

## Stage 5 — Waiting for results

If tests have been ordered, there is another wait while results come back. This can feel frustrating because you have already waited once, but it is a necessary part of the diagnostic process. Typical turnaround times:

- Blood tests: 30–90 minutes for routine panels, longer for specialised tests
- X-ray reports: 15–60 minutes
- CT scans: the scan itself takes minutes, but the radiologist's report may take 30–60 minutes
- Urine cultures: preliminary results in hours, full culture in 24–48 hours (but A&E does not usually wait for the full culture)

During this wait, your cubicle may be needed for another patient. You might be asked to return to the waiting room or moved to a different area. This does not mean you have been forgotten — your results will be tracked by the system.

## Stage 6 — Decision and outcome

Once the clinical picture is clear, one of several things happens:

**Discharge home.** The most common outcome. You leave with:
- A diagnosis or working diagnosis
- Written or verbal advice about self-care and recovery
- A prescription if medications are needed (either to collect from the hospital pharmacy or your local pharmacy)
- Instructions about when to seek further medical help — the "safety net" advice
- A follow-up plan: this might be a referral letter for your GP, an outpatient clinic appointment, or advice to return if symptoms worsen

Read our [after A&E discharge guide](/guides/after-ae-discharge/) for what to expect in the days following your visit.

**Admission to a ward.** If your condition requires ongoing treatment, monitoring or surgery, you will be admitted. The A&E team arranges a bed on an appropriate ward, which can involve another wait if the hospital is full.

**Transfer to another hospital.** Occasionally, the specialist service you need is at a different site. The A&E team arranges ambulance transfer and communicates your details to the receiving hospital.

**Referral to a specialist team within the hospital.** You may stay in the A&E department while a specialist — such as an orthopaedic surgeon, cardiologist, or mental health team — comes to assess you.

## How long does the whole process take?

The NHS operational standard aims for 76 per cent of patients to be admitted, transferred or discharged within **four hours** of arrival. In practice, many visits run longer. National data shows the median time for patients who go home is around 3 to 4 hours, while those admitted to a ward spend 6 to 8 hours in A&E on average.

Your actual time will depend on how busy the department is, what investigations you need, and whether you are waiting for a specialist opinion or a ward bed. You can get a sense of how busy departments are near you by checking our [live wait time tracker](/hospitals/).

## Your rights during the visit

You have the right to be treated with dignity, to have your condition explained in language you understand, and to consent to or refuse treatment. If you have concerns about your care at any point, you can ask to speak to a senior clinician or the nurse in charge. Our [patient rights guide](/guides/ae-patient-rights/) covers this in full.

## What to take away

A&E involves multiple sequential waits, and the total time is rarely under two hours even for straightforward cases. Preparing properly — bringing your [medications list and essentials](/guides/what-to-bring-ae/), being clear during triage, and understanding the stages — will make the experience considerably smoother. If your condition is not an emergency, consider whether an [Urgent Treatment Centre](/guides/ae-or-utc/) or [NHS 111](/guides/nhs-111-guide/) might get you treated faster.
`,
  },
  {
    slug: "busiest-times-ae",
    title: "A&E by the Clock: The Best and Worst Hours to Arrive",
    description: "A data-backed look at when emergency departments are emptiest and most packed, day by day.",
    category: "Planning Ahead",
    readTime: "7 min read",
    lastReviewed: "August 2026",
    content: `
## What the numbers show

NHS England publishes hourly attendance counts for every major A&E department, and we supplement that with our own real-time tracking data from hospital dashboards across the UK. When you combine these sources over months and years, a remarkably consistent weekly rhythm emerges. While individual hospitals can deviate from the average — a department near a stadium will spike on match days, a coastal hospital will see summer surges — the overall patterns hold true across the vast majority of departments.

Understanding these patterns matters because, for conditions that are urgent but not immediately life-threatening, timing your arrival can easily shave an hour or more off your total visit. If you are uncertain whether your condition is urgent enough for A&E in the first place, read our guide on [A&E vs UTC](/guides/ae-or-utc/) before deciding where to go.

## Peak periods — when queues are longest

### Monday mornings (8 am – noon)

Monday is the single busiest day in almost every A&E department in the country. The mechanism is straightforward: GP surgeries are closed over the weekend, pharmacies keep shorter hours, and conditions that develop on Saturday or Sunday have to wait. By Monday morning, a wave of patients whose problems built up over the weekend arrives in A&E at roughly the same time, creating a surge that takes the whole morning to clear.

If your condition developed over the weekend and you can safely wait, consider calling your GP surgery at 8 am on Monday for a same-day slot instead of going directly to A&E. Many practices hold emergency slots specifically for this Monday-morning pressure.

### Weekday evenings (6 pm – 10 pm)

The second-busiest window on most weekdays. People finish work and school, then head to A&E with problems they put off during the day. Parents bring in children who fell at school or complained of earache. Office workers who tripped on the commute but pushed through the day finally present for treatment. This after-work surge typically peaks around 7 pm and does not fully clear until 10 or 11 pm.

### Friday and Saturday nights (8 pm – 2 am)

Alcohol-related injuries, falls and incidents cluster around closing time and the hours that follow. Departments near city centres and entertainment districts are hit hardest. The atmosphere in waiting rooms during these hours can be more challenging — noise, occasional aggression and longer waits are all common. If your condition is not alcohol-related, arriving before 8 pm on a Friday or Saturday or waiting until Sunday morning will usually give you a significantly quieter experience.

### Bank holidays and major events

With pharmacies and GP surgeries closed, bank holidays drive extra footfall — they effectively replicate the weekend effect but compressed into a single day. Large local events — football matches, music festivals, bonfire night — can cause short, sharp spikes at nearby hospitals. Christmas Day is, counterintuitively, one of the busiest individual days of the year.

## Quiet windows — when queues are shortest

### Early mornings (4 am – 8 am)

Every day of the week, the pre-dawn and dawn hours are the emptiest. The night-shift patients from the previous evening have been seen, and the daytime wave has not yet arrived. If your condition can safely wait until morning, arriving at 6 or 7 am routinely shaves an hour or more off your total time compared to arriving at 8 pm the night before.

This is particularly useful for conditions like suspected fractures where you have managed the pain overnight with ice and ibuprofen and now need an X-ray. Arriving first thing gets you ahead of the day's build-up. Check [live wait times](/hospitals/) to confirm which departments near you are quietest at that moment.

### Midweek mid-afternoons (2 pm – 4 pm)

There is often a small dip between the lunchtime rush and the after-work surge, particularly on Tuesdays and Wednesdays. This is the quietest daytime window. It is not dramatic — the department is still operational and may still be busy — but it is consistently the least congested period during normal working hours.

### Tuesday, Wednesday and Thursday

These three days are, on average, noticeably quieter than Monday or the weekend. If you have a choice of day — and this applies mainly to conditions that are uncomfortable but not worsening — midweek is reliably better. The very best combination is a Tuesday or Wednesday morning between 6 and 8 am, which typically represents the lowest point in the entire weekly cycle.

## Seasonal swings

Beyond the weekly rhythm, there is a clear annual pattern:

**Winter (December–February)** is the toughest period for A&E. Influenza, respiratory infections, norovirus outbreaks, falls on icy pavements and the Christmas and New Year bank holidays all pile on simultaneously. Some departments run over capacity continuously throughout January. If you need A&E during winter, the early-morning window becomes even more valuable because the overnight lull is one of the few predictable calm periods.

**Spring and autumn** are moderate. Easter creates a bank-holiday spike, and late autumn sees the beginning of respiratory season, but overall these months sit between the winter peak and summer trough.

**Summer (June–August)** is lighter overall. GP surgeries are open, weather-related conditions like hypothermia and icy falls disappear, and major respiratory infections are at their annual low. However, heatwaves can cause a spike in heat exhaustion and dehydration presentations, outdoor sporting injuries rise, and tourists in coastal and rural areas increase attendances at smaller hospitals that are not staffed for the extra volume.

**Christmas Day** deserves special mention. Despite assumptions that nobody goes to A&E on Christmas Day, it is consistently one of the highest-volume days of the year. GP surgeries and pharmacies are shut, dental services are closed, and domestic incidents — burns from cooking, falls from ladders while decorating, toy-related injuries involving children — are all elevated. If you need care on Christmas Day, expect a significant wait regardless of the hour.

## How to use these patterns practically

These patterns are most useful when your condition gives you some flexibility. Here is a practical decision framework:

**Life-threatening or rapidly worsening:** Go immediately, regardless of the hour or day. Do not delay. Call 999 if needed.

**Urgent but stable:** If it is evening and the department is busy, consider whether you can manage overnight with self-care and attend at 6–7 am. Check our [live wait times](/near-me/) to compare departments near you.

**Needed today but not worsening:** Aim for early morning on a Tuesday, Wednesday or Thursday. Avoid Monday morning and weekend evenings. Compare departments and choose the one with the shortest current wait.

**Unclear whether you need A&E:** [Call 111](/guides/nhs-111-guide/) before setting off. They can advise on timing, direct you to a quieter service, or even book you a timed slot.

## The data behind the advice

All the patterns described in this guide are derived from NHS England's published A&E attendance statistics, supplemented by our own real-time monitoring. They represent national averages — your local hospital may differ, particularly if it is near a major event venue, a motorway junction, or an area with an older-than-average population. The best way to account for local variation is to [check live wait times](/hospitals/) before you travel. Our guide on [how wait times are measured](/guides/understanding-wait-times/) explains exactly what the numbers mean.

## Bottom line

## Regional variation

While the national patterns described above hold broadly true, individual hospitals can deviate significantly. A department near a sports stadium will spike after matches. A hospital serving a university town sees seasonal surges during freshers' week and exam periods. Coastal hospitals face summer tourist pressure that inland hospitals do not.

The most reliable way to account for local variation is to [check live wait times](/hospitals/) before you travel. National patterns give you a starting framework — arrive early on a midweek morning — but real-time data tells you what is actually happening right now at your local departments.

Regions also differ in their baseline pressure. [London](/regions/london/) departments, for example, tend to run at higher average occupancy than rural [South West](/regions/south-west/) hospitals simply because of population density. What counts as a quiet period at a central London hospital might still be busier than the peak at a smaller district general.

## Planning around known events

If you know you are going to need A&E in the near future — for example, you have an injury that needs reassessment, or a condition your GP has said may require emergency care — you can plan ahead. Discuss timing with your GP: would it be safe to attend at 7 am tomorrow rather than 9 pm tonight? If yes, arriving at the quieter time gives you a materially faster experience without clinical compromise.

For injuries that could be managed at a [UTC](/guides/ae-or-utc/) instead, the timing advantage is even greater. UTCs are generally less affected by the A&E rush patterns because they see fewer ambulance arrivals and fewer high-acuity cases, but they still tend to be quietest in the morning.

## Bottom line

If your situation is not life-threatening and gives you some flexibility, **aim for 6–8 am on a Tuesday, Wednesday or Thursday**. That combination typically produces the shortest waits nationwide. Avoid Monday mornings and weekend evenings if you can. And always check [current queues](/near-me/) before choosing which department to visit — real-time data beats national averages every time.
`,
  },
  {
    slug: "nhs-111-guide",
    title: "NHS 111 Explained: What It Does, When to Call, and How It Helps",
    description: "A complete primer on the 111 service and how using it before travelling can save you hours.",
    category: "Choosing a Service",
    readTime: "7 min read",
    lastReviewed: "August 2026",
    content: `
## What is 111?

NHS 111 is a free telephone and online triage service that runs **around the clock, every day of the year** in England, Scotland and Wales. Northern Ireland operates a similar service through regional GP out-of-hours numbers. The service was designed to act as a front door to the NHS — a single point of contact that assesses your symptoms and routes you to the right level of care, whether that is self-treatment at home, a pharmacy visit, a GP appointment, or a hospital department.

You can reach it by:

- **Dialling 111** from any landline or mobile — the call is free, even from mobiles without credit
- **Visiting** 111.nhs.uk in a browser for the online assessment (available in England)
- **Opening the NHS App** and starting a 111 online session

The online route is often faster than the phone because you skip the call queue, but the phone service is important for people who are not comfortable using technology, who have visual impairments, or whose symptoms make it difficult to type.

## When should you use it?

Call or go online whenever you need medical guidance but the situation **is not immediately life-threatening**. If someone is unconscious, not breathing, having a heart attack or stroke, or bleeding uncontrollably, call 999 — not 111. Our guide on [when to call 999](/guides/when-to-call-999/) covers the distinction in detail.

Typical reasons to use 111:

- You are unsure whether you need A&E, a UTC, a pharmacy or self-care — the [A&E vs UTC guide](/guides/ae-or-utc/) covers the clinical distinction, but 111 can assess your specific symptoms
- You feel unwell outside normal GP hours and want professional advice before the next morning
- You suspect you need to be seen today but your condition does not warrant an ambulance
- Your GP surgery is closed and you need a same-day appointment somewhere
- A child has symptoms you are not sure how to manage — our [children's A&E guide](/guides/children-ae-guide/) covers when to go directly to hospital versus calling 111
- You have a dental emergency outside surgery hours
- You need urgent mental health support but are not in immediate danger — see our [mental health crisis guide](/guides/mental-health-crisis/) for the full range of options

## What happens during a 111 consultation?

Whether you call or use the online tool, the process follows the same clinical assessment pathway:

### Step 1 — Symptom collection

A trained health advisor (on the phone) or the online questionnaire collects your symptoms. They ask structured questions: where the pain is, when it started, how severe it is on a scale, whether it is getting better or worse, what you have already tried. The questions are guided by an algorithm called NHS Pathways, which is the same clinical decision tool used in ambulance dispatch.

### Step 2 — Assessment

The system evaluates your answers against thousands of clinical pathways to determine the most likely urgency level. The health advisor does not make the clinical judgement themselves — they follow the algorithm — but they can escalate to a clinical advisor (a nurse or doctor) if the pathway is unclear or the patient's situation is complex.

### Step 3 — Disposition

Based on the assessment, you receive one of several outcomes:

- **Self-care advice** — the system determines that your condition can be safely managed at home. You receive specific instructions on what to do, what to watch for, and when to call back or seek further help.
- **Pharmacy referral** — you are directed to a nearby pharmacy for over-the-counter treatment or, increasingly, a pharmacist consultation with prescribing capability.
- **GP appointment** — 111 can book you directly into a GP appointment, including out-of-hours appointments at a local hub. This is often faster than trying to call your surgery at 8 am.
- **Urgent Treatment Centre or A&E** — if hospital-level care is needed, 111 can tell you which department to attend. In some areas, they can book a timed arrival slot.
- **Ambulance dispatch** — if the assessment identifies an emergency, 111 transfers you to the ambulance service directly. This happens in a small percentage of calls.
- **Dental services** — for dental emergencies, 111 can direct you to an out-of-hours dental service.

## How 111 can cut your A&E time

This is the key benefit that many people miss. If 111 decides you do need a hospital, some trusts allow them to **pre-book a timed arrival slot** for you. That means:

- The department is expecting you and has your triage information ready
- You may be able to skip part of the initial registration queue because your details are already in the system
- You avoid turning up at the busiest hour unnecessarily — 111 can advise on when to attend
- If 111 redirects you to a UTC instead of A&E, you save even more time because UTCs consistently have shorter waits

Even when a pre-booked slot is not available, having a 111 reference number speeds up your registration. The receptionist can see that you have already been clinically assessed, which can accelerate the triage process.

## When 111 does not help as much

The service has limitations worth understanding:

- **Long call queues.** During winter pressure and bank holidays, phone wait times can exceed 30 minutes. The online tool avoids this, but not everyone is comfortable using it.
- **Algorithmic conservatism.** The NHS Pathways algorithm is designed to err on the side of caution. It will sometimes recommend A&E for conditions that an experienced clinician would handle differently. This is a safety feature, not a flaw, but it does mean 111 occasionally sends people to A&E who did not strictly need to go.
- **Cannot examine you.** 111 works from your description alone. It cannot see a rash, feel a lump, or listen to your chest. For conditions where the visual appearance matters, you may need to be seen in person regardless of the telephone advice.
- **Limited prescribing.** 111 can arrange prescriptions through out-of-hours GPs, but this depends on local service availability. In some areas, out-of-hours prescribing is limited to a small formulary.

## The online route vs the phone

The online assessment at 111.nhs.uk has several advantages: no call queue, available 24/7, and you can work through it at your own pace. It also saves a transcript of the assessment that you can show to the clinician if you end up at a hospital.

The phone is better when your symptoms are complex, when you need reassurance from a human voice, when you are calling about someone else (such as a child or elderly relative), or when you are too unwell to type.

## 111 for children

Parents often hesitate about whether to call 111 or go straight to A&E when a child is unwell. In general, 111 is a good first step unless the child is showing signs of a genuine emergency — difficulty breathing, a non-blanching rash, unresponsiveness, or a seizure. For everything else, 111 can assess the child's symptoms and either reassure you, direct you to the right service, or escalate to 999 if needed. Our [children's A&E guide](/guides/children-ae-guide/) covers the specific red flags in more detail.

## Key point

**Ring 111 before driving to A&E** unless the situation is clearly a 999 emergency. At worst you lose five to ten minutes on the phone or the online assessment; at best you are redirected to a faster service entirely — or given a booked slot that shortens your hospital visit by hours. If your condition does need A&E, 111 has already done the initial triage work, which gives you a head start when you arrive. You can [check live wait times](/near-me/) alongside the 111 advice to choose the quietest department available.

## Common questions about 111

### Will 111 send me to A&E unnecessarily?

The algorithm is designed to err on the side of caution, which means it sometimes recommends A&E for conditions that a GP could manage. This is a deliberate safety feature. If you think the recommendation does not match your situation, you can ask to speak to a clinical advisor — a nurse or doctor who can apply clinical judgement beyond the algorithm. You are never forced to follow the recommendation.

### Can 111 prescribe medication?

111 itself does not prescribe, but it can connect you to an out-of-hours GP service that can. If the assessment determines you need a prescription, 111 will arrange an appointment with an out-of-hours doctor who can prescribe and issue the medication. The availability and speed of this depends on your local area.

### Is 111 available in all four nations?

England, Scotland and Wales all operate 111 services. Northern Ireland uses GP out-of-hours numbers rather than 111 — contact your GP practice for the out-of-hours number, which is usually on the answerphone message.

### Can I use 111 for someone else?

Yes. You can call on behalf of a child, an elderly relative, or anyone who cannot call themselves. The health advisor will ask questions about the patient's symptoms, and you answer based on what you observe. This is particularly useful for parents unsure whether a child needs medical attention.

For more on reducing your total time once you get to hospital, see our [practical tips guide](/guides/reduce-ae-wait/). And if your question is specifically about [out-of-hours care options](/guides/out-of-hours-care/) beyond 111, we have a dedicated guide covering the full range of services available evenings, nights and weekends.
`,
  },
  {
    slug: "children-ae-guide",
    title: "Taking a Child to A&E: A Parent's Complete Guide",
    description: "What to expect when bringing a child to the emergency department, from triage differences to what to pack.",
    category: "Family Care",
    readTime: "8 min read",
    lastReviewed: "August 2026",
    content: `
## When to take a child to A&E

Children can deteriorate faster than adults, and symptoms that would be minor in a grown-up can be more significant in a young child. However, not every childhood illness needs A&E — and a busy emergency department is not the most comfortable place for a sick or injured child. Getting the decision right matters for your child's wellbeing and for the department's capacity to serve those who need it most.

### Go to A&E immediately if your child has:

- **Difficulty breathing** — fast breathing, sucking in of the ribs, grunting, or nostrils flaring. In babies, look for head-bobbing with each breath.
- **A non-blanching rash** — press a clear glass firmly against the rash. If the spots do not fade under pressure, this could be meningitis and requires immediate emergency care.
- **Unresponsiveness or extreme drowsiness** — significantly harder to wake than usual, or floppy and unresponsive when awake
- **A seizure lasting more than five minutes**, or a first seizure of any length
- **A significant head injury** with loss of consciousness, vomiting, or confusion — see our [head injury guide](/guides/head-injury-guide/) for full red flags
- **Severe pain** that is not improving with age-appropriate doses of paracetamol or ibuprofen
- **A serious burn** — any burn on the face, hands, feet or genitals, any burn larger than the child's palm, or any burn in a baby under 12 months — our [burns guide](/guides/burns-first-aid/) covers first aid steps
- **Swallowing a battery, magnet or sharp object**
- **A suspected broken bone** where the limb is deformed, very swollen, or the child cannot move it — though for simple suspected fractures, a UTC may be faster; see our [fractures guide](/guides/fractures-sprains-guide/)

### Consider alternatives if:

- The child has a temperature but is feeding, drinking and reasonably alert — give age-appropriate paracetamol or ibuprofen and monitor
- The child has a cough, cold or sore throat without breathing difficulty — a pharmacy or GP is usually more appropriate
- The child has a minor cut, graze or insect bite — clean and dress at home
- You are unsure — [call 111](/guides/nhs-111-guide/), which has paediatric pathways specifically designed for children's symptoms

## How children's A&E differs from adults

Many hospitals have a dedicated paediatric emergency department or a children's area within the main A&E. These spaces are designed to be less intimidating: brighter colours, toys, child-sized equipment and staff who specialise in treating children. If your hospital does not have a separate children's area, your child will be seen in the main department but by clinicians experienced in paediatrics.

### Triage is adjusted for age

The triage system for children uses different vital-sign thresholds. A heart rate of 140 is abnormal in an adult but can be normal in a toddler. Triage nurses use age-specific charts to assess whether your child's observations are in the expected range. This is why it is important to know your child's age in months (not just years) and their approximate weight — both affect medication doses and clinical thresholds.

For a full explanation of how the triage process works, see our [triage guide](/guides/triage-explained/).

### Pain assessment

Young children cannot always tell you where it hurts or how much. Staff use visual pain scales — such as the Wong-Baker Faces scale, where the child points to a face that matches how they feel — or behavioural observation to assess pain levels. For non-verbal children and babies, staff assess facial expression, body position, cry patterns and consolability.

### Parental presence

Parents or guardians are expected to stay with the child throughout the visit. You are your child's advocate, translator and comfort. Staff will direct clinical questions to you, and your observations about changes in your child's behaviour are vital diagnostic information. If both parents are present, one can stay with the child while the other handles registration and fetches supplies.

## What to bring

Children's A&E visits often take longer than you expect, so preparation is important. Beyond the standard items covered in our [what to bring guide](/guides/what-to-bring-ae/), pack:

- **Nappies and wipes** if your child is not toilet-trained — more than you think you will need
- **A change of clothes** — vomiting, spills and medical procedures can soil clothing
- **A favourite toy or comfort item** — this can make examinations significantly easier for staff and less distressing for the child
- **Milk or formula and bottles** for babies — the department may not have your brand
- **Snacks and drinks** — healthy, quiet snacks like rice cakes or fruit pouches. Avoid anything the child could choke on while lying down
- **A tablet or phone with downloaded content** — WiFi in hospitals is unreliable, so download games, shows or audiobooks in advance
- **The red book (Personal Child Health Record)** if you still have it — it contains vaccination history and growth charts
- **Any recent discharge letters or clinic letters** relevant to the current problem

### Medications

Bring all medications your child is currently taking, including over-the-counter products and any you administered today. Staff need to know exactly what the child has had, when, and the dose. This is critical for pain relief — giving paracetamol at home then receiving another dose in A&E without staff knowing can lead to overdose.

## Common childhood presentations in A&E

### High fever (febrile illness)

Fever is the most common reason parents bring children to A&E, and the majority of febrile children do not need emergency care. A temperature of 38°C or above is a fever. Most fevers in children are caused by viral infections and resolve within three to five days. The important thing is the child's behaviour, not the number on the thermometer.

A child with a fever of 39°C who is drinking, playing and responding to you normally is less concerning than a child with a fever of 38.5°C who is lethargic, not drinking and inconsolable.

### Falls and injuries

Children fall constantly — from beds, climbing frames, stairs and their own feet. Most falls result in bruises and bumps that need nothing more than ice and reassurance. The injuries that need A&E assessment are those with significant mechanism (falling from height, falling onto a hard surface at speed), visible deformity of a limb, persistent severe pain, or signs of head injury.

### Breathing difficulties

Croup, bronchiolitis and asthma are common causes of breathing difficulty in children. Croup typically causes a barking cough and a harsh sound when breathing in (stridor). Bronchiolitis affects babies and causes wheezing and feeding difficulty. Asthma attacks can escalate quickly. Any child working hard to breathe — using tummy muscles, sucking in ribs, unable to complete sentences — needs A&E assessment.

### Rashes

Most rashes in children are viral and harmless. The critical test is the glass test: press a clear glass firmly against the rash. If the marks fade (blanch), the rash is almost certainly not meningococcal. If the marks do not fade, call 999 immediately.

## During the visit

### Expect multiple stages

Just like adult A&E, a children's visit involves sequential stages: registration, triage, waiting, clinical assessment, possible investigations, and a decision. Our general [A&E walkthrough](/guides/what-happens-in-ae/) describes each stage in detail. For children, the key difference is that investigations may take longer because paediatric blood tests often require specialist equipment or smaller-gauge needles.

### Keep your child calm

Your own demeanour directly affects your child's anxiety. If you are calm and reassuring, your child is more likely to cooperate with examinations. Explain procedures in age-appropriate language: "The nurse needs to listen to your tummy" rather than "They need to check for internal bleeding."

### Ask questions

You have every right to understand what is happening and why. Ask:
- What do you think is wrong?
- What tests are you doing and what are you looking for?
- What treatment are you giving and are there side effects?
- What should I watch for at home?
- When should I bring them back?

## After discharge

Children can bounce back remarkably quickly from illness and injury, but they can also deteriorate faster than adults. Pay close attention to the safety-net advice given at discharge, and do not hesitate to return if your child's condition worsens. No clinician will judge you for coming back — it is far better to have a child re-assessed unnecessarily than to wait too long. If your child's symptoms change or new symptoms appear within 48 hours of discharge, always seek reassessment rather than assuming the original diagnosis still applies. Our [after discharge guide](/guides/after-ae-discharge/) covers what to expect and when to seek follow-up care.

## Bottom line

For genuine emergencies — breathing difficulty, unresponsiveness, non-blanching rashes, significant trauma — take your child to A&E without hesitation. For everything else, [call 111](/guides/nhs-111-guide/) first, consider whether an [Urgent Treatment Centre](/guides/ae-or-utc/) is appropriate, and [check live wait times](/near-me/) to choose the quietest department if A&E is needed. Pack well, stay calm, and remember that staff in children's departments deal with worried parents every day — you are not wasting anyone's time by seeking help.
`,
  },
  {
    slug: "mental-health-crisis",
    title: "Mental Health Crisis: When and How A&E Can Help",
    description: "A compassionate guide to accessing emergency mental health care through A&E and alternative crisis services.",
    category: "Understanding A&E",
    readTime: "7 min read",
    lastReviewed: "August 2026",
    content: `
## A&E is there for mental health emergencies too

A&E is not only for physical injuries and illness. If you or someone you are with is in a mental health crisis — at immediate risk of harming themselves or others, or experiencing a severe psychiatric episode that makes them unable to keep themselves safe — A&E is a valid and appropriate destination. You will not be turned away, and you are not wasting anyone's time.

Mental health emergencies include:

- **Active suicidal intent** — a plan to end your life that you are about to act on, or have already acted on (such as taking an overdose)
- **Self-harm requiring medical treatment** — deep cuts, burns or injuries that need wound care, or ingestion of harmful substances
- **Psychotic episodes** — seeing or hearing things that are not there, severely disorganised thinking, or paranoid beliefs that are putting you or others in danger
- **Severe panic or dissociation** — where you feel so disconnected from reality that you cannot function or keep yourself safe
- **Extreme agitation or aggression** triggered by a mental health condition, where there is a risk of harm

## What happens at A&E for a mental health crisis

### Arrival and triage

You arrive and check in the same way as any other patient. At triage, the nurse will assess both your physical safety (especially if you have taken substances or self-harmed) and your mental state. You should be open about what has happened, including any substances taken, self-harm, or suicidal thoughts. Staff need accurate information to help you safely.

The [triage process](/guides/triage-explained/) applies to mental health presentations in the same way as physical ones — your clinical urgency determines your priority. If you have taken an overdose or are actively self-harming, you will be triaged as high priority. If you are in severe distress but physically safe, you may wait longer, and this can feel difficult. Let staff know if your distress escalates while you wait.

### Physical assessment first

If there is any physical component — an overdose, self-harm injuries, substance intoxication — A&E will treat the physical issue first. This is not dismissing the mental health component; it is ensuring your immediate physical safety. Blood tests, wound treatment, monitoring of vital signs and sometimes activated charcoal or antidotes for overdoses may be needed before a psychiatric assessment can begin.

### Psychiatric assessment

Once you are physically stable, a mental health liaison team — sometimes called the psychiatric liaison service, crisis team, or RAID team — will assess you. This team usually includes psychiatric nurses and sometimes a psychiatrist. They will talk to you about what has happened, your mental health history, your current circumstances, and what support is available to you.

The wait for the mental health team can sometimes be long, particularly during nights and weekends when the team may be covering the whole hospital. This is a known gap in the system, and advocacy groups have pushed for better funding of 24-hour liaison services. If you are waiting a long time, ask staff for an update on when the team will be available.

### Possible outcomes

After assessment, several things may happen:

- **Discharge with crisis team follow-up** — the most common outcome. You are connected with the community crisis team, who will contact you within 24 hours (usually by phone or home visit) to begin a short-term support plan.
- **Voluntary admission** — if you agree, you may be admitted to a psychiatric ward for a period of observation and stabilisation.
- **Admission under the Mental Health Act** — in rare cases where you are assessed as posing an immediate risk to yourself or others and are refusing voluntary treatment, a Mental Health Act assessment may be arranged. This requires two doctors and an approved mental health professional. You have [rights during this process](/guides/ae-patient-rights/) and should be informed of them.
- **Referral to community services** — for less acute presentations, you may be referred to your GP, a community mental health team, or talking therapy services.

## Alternatives to A&E for mental health crises

A&E is not always the best setting for mental health support. Emergency departments are noisy, brightly lit, clinical environments with long waits — none of which is ideal when you are in severe psychological distress. Several alternatives exist:

### Crisis lines

- **Samaritans** — call 116 123 (free, 24/7), email jo@samaritans.org, or visit a branch. For listening and support, not clinical intervention.
- **Crisis text line** — text SHOUT to 85258 (free, 24/7). Trained volunteers respond via text.
- **NHS 111** — option 2 connects you to a mental health crisis line in many areas. Our [111 guide](/guides/nhs-111-guide/) covers how the service works.
- **Your local crisis team** — if you are already known to mental health services, your care plan should include a crisis contact number. Call this before going to A&E.

### Crisis cafes and safe spaces

Many areas now operate crisis cafes — sometimes called safe havens or crisis houses — where you can walk in during evenings and weekends for face-to-face support in a calm, non-clinical environment. Staff are trained in mental health support and can help you stabilise without the pressures of an A&E department. Ask your GP or local NHS trust for details.

### 999 for immediate danger

If you are about to act on suicidal thoughts, or someone is at immediate risk of serious self-harm, call 999. Paramedics can provide immediate safety and transport to A&E. This is not an overreaction — it is exactly what the service is for.

## Supporting someone else in crisis

If you are with someone who is in a mental health crisis:

- **Stay with them.** Do not leave them alone if they are at risk.
- **Listen without judgement.** You do not need to fix the problem — being present and hearing them is valuable.
- **Remove means of harm if you safely can.** Put medications, sharp objects or alcohol out of reach.
- **Encourage them to seek help.** Offer to call 111, Samaritans, or their crisis team together.
- **If they refuse help and are in immediate danger, call 999.** You do not need the person's consent to call an ambulance if their life is at risk.

At A&E, you can stay with the person unless asked to leave by clinical staff. Your observations about their behaviour — what they said, what they did, how they have been in recent days — are valuable diagnostic information. Share this with the triage nurse and the mental health team.

## Your rights during a mental health A&E visit

You have the same rights as any other patient. You are entitled to be treated with dignity, to have your condition explained, and to consent to or refuse treatment (with limited exceptions under the Mental Health Act). You can ask for a same-sex clinician, an interpreter, or an advocate. Our [patient rights guide](/guides/ae-patient-rights/) covers these in full.

If you feel your mental health crisis was not taken seriously at A&E, or that you were treated dismissively, you have the right to [raise a complaint](/guides/ae-complaints-pals/) through the hospital's PALS service.

## After the crisis

## Reducing the distress of a mental health A&E visit

A&E environments are not designed for mental health crises. The bright lights, noise, unfamiliar faces and clinical smells can intensify distress. Some practical steps can help:

- **Bring headphones** — music or a podcast can create a small pocket of calm in a chaotic environment
- **Ask for a quiet space** — many departments have a dedicated quiet room for mental health patients. If one is available, request it.
- **Bring a trusted person** — having someone you trust with you provides emotional grounding and practical advocacy
- **Write things down** — if speaking is difficult, write your key symptoms, history and concerns on your phone or a piece of paper and hand it to the triage nurse
- **Bring your crisis plan** if you have one — it tells staff what works for you and what does not
- **Be honest about substances** — if you have taken alcohol, recreational drugs or extra doses of medication, tell staff. This is clinical information, not a moral judgement, and withholding it can delay your care or lead to dangerous interactions

## The A&E environment and self-harm risk

If you are attending A&E because of self-harm thoughts and are worried about the wait, tell the triage nurse explicitly. They can arrange observation or check-ins during your wait. You can also ask for any items you are concerned about to be held by staff until you leave.

## After the crisis

A mental health crisis is not a one-off event for most people — it is usually part of a longer journey. After discharge, the most important step is engaging with the follow-up offered. This might be crisis team visits, a GP appointment, a referral to therapy, or a medication review. Our [after discharge guide](/guides/after-ae-discharge/) covers follow-up care for both physical and mental health presentations.

Building a crisis plan for next time — including contact numbers, coping strategies, people to call and a list of things that help — makes future crises more manageable and may help you access support before reaching the point of needing A&E.

## Bottom line

A&E will see you for a mental health emergency. You are not wasting time and you will not be turned away. But if you can safely access crisis lines, crisis cafes or your local crisis team first, these services often provide better-suited support faster. For immediate danger — to yourself or others — call 999 without hesitation. If you do need to attend in person, [check live wait times](/near-me/) to find the least busy department near you.
`,
  },
  {
    slug: "triage-explained",
    title: "How A&E Triage Works: Why You Might Wait While Others Go First",
    description: "An honest explanation of the clinical priority system, what each category means, and why arrival order is not the queue order.",
    category: "Understanding A&E",
    readTime: "7 min read",
    lastReviewed: "August 2026",
    content: `
## What is triage?

Triage is the process of sorting patients by clinical urgency so that the sickest are seen first. The word comes from the French trier, meaning to sort or sift. In an A&E department, triage happens within minutes of your arrival and determines your place in the clinical queue — which is separate from and more important than your place in the physical waiting room.

Understanding triage removes much of the frustration of A&E. When you see someone who arrived after you being called through first, it almost always means their clinical need is greater, not that the system has forgotten you. This guide explains exactly how the process works.

## The triage assessment

When you arrive at A&E and complete registration, a triage nurse — typically a senior nurse with additional emergency assessment training — will see you. The national target is within 15 minutes of arrival, though this varies with department workload.

During triage, the nurse assesses:

### Vital signs

- **Blood pressure** — using a cuff on your arm
- **Heart rate (pulse)** — measured at the wrist or by the blood-pressure machine
- **Respiratory rate** — how many breaths you take per minute, often counted by observation
- **Temperature** — using an ear or forehead thermometer
- **Oxygen saturation** — a small clip on your finger that measures how well your blood is carrying oxygen
- **Blood glucose** — if diabetes is suspected or relevant, a finger-prick test

These numbers are plotted against normal ranges to calculate an early warning score. The higher the score, the more abnormal your observations are, and the higher your clinical priority.

### Symptoms and history

The nurse asks targeted questions:

- What happened and when did it start?
- Where is the pain and how severe is it (usually on a scale of 0 to 10)?
- Is the problem getting better, staying the same, or getting worse?
- What have you already tried (medication, ice, rest)?
- Do you have relevant medical history — for example, a heart condition if you have chest pain?
- What medications are you taking?
- Do you have any allergies?

### Physical examination

The nurse may briefly examine the affected area — looking at a wound, feeling a swollen joint, listening to your chest — to gather enough information for categorisation. This is not the full clinical examination; that comes later when you see the treating clinician.

## The five priority categories

Most UK A&E departments use the Manchester Triage System (MTS), which assigns one of five priority levels. Some departments use a different system, but the principle is the same.

### Category 1 — Immediate (Red)

Target: seen immediately, within 0 minutes.

This is reserved for patients whose life is at immediate risk: cardiac arrest, respiratory failure, major haemorrhage, severe anaphylaxis, or unconsciousness with no response. These patients go directly to the resuscitation bay, where the most senior staff and the most advanced equipment are concentrated.

### Category 2 — Very Urgent (Orange)

Target: seen within 10 minutes.

Conditions that are very serious and time-sensitive but where the patient is currently conscious and breathing. Examples include chest pain with suspected heart attack, stroke symptoms within the treatment window, severe breathing difficulty, significant burns, and high-mechanism trauma (such as a car crash at speed).

### Category 3 — Urgent (Yellow)

Target: seen within 60 minutes.

The patient has a condition that needs prompt assessment but is not immediately life-threatening. Examples include abdominal pain with abnormal vital signs, moderate bleeding that has been controlled, possible fractures with deformity, high fever with a rash in adults, and acute mental health crisis. This is the most common triage category in a busy department.

### Category 4 — Standard (Green)

Target: seen within 120 minutes.

Conditions that need A&E-level assessment but are clinically stable. Examples include simple fractures without deformity, lacerations that need stitching but are not bleeding heavily, abdominal pain with normal vital signs, and stable chronic conditions that have worsened.

### Category 5 — Non-urgent (Blue)

Target: seen within 240 minutes.

Conditions that could likely be managed by a GP, pharmacy or UTC. Examples include minor cuts and bruises, long-standing symptoms that have not changed, rashes without systemic symptoms, and medication requests. Patients in this category often wait the longest and may be redirected to a more appropriate service. If you find yourself in category 5, consider whether a [UTC](/guides/ae-or-utc/) or [111 consultation](/guides/nhs-111-guide/) would be faster.

## Why arrival order does not equal queue order

In a supermarket, first in line means first served. A&E does not work this way, and for good reason. A patient who arrives at 3 pm with chest pain and abnormal ECG findings will rightly be seen before a patient who arrived at 1 pm with a sprained ankle, even though the ankle patient has been waiting longer.

Within the same triage category, patients are generally seen in arrival order. But when a higher-priority patient arrives, they move ahead of everyone at a lower level. During busy periods, this can mean that category 4 and 5 patients wait for several hours while a steady stream of category 2 and 3 patients are seen first.

This is not queue-jumping. It is the system prioritising based on clinical need. Our guide on [practical ways to reduce your wait](/guides/reduce-ae-wait/) covers strategies for minimising your time regardless of your triage category.

## Can your triage category change?

Yes. If your condition changes while you are waiting — symptoms worsen, new symptoms appear, or you feel significantly worse — tell the triage desk immediately. You can be re-triaged and moved to a higher priority category. Conversely, if a patient's condition stabilises after initial treatment, their effective priority may decrease.

This is why it is important to flag changes. Sitting quietly in the waiting room while your pain escalates does not help you. Walk to the desk, explain what has changed, and ask to be re-assessed.

## What affects wait time beyond triage

Even within the same category, several factors influence how quickly you are seen:

- **Department workload** — how many patients are ahead of you in your category and in higher categories
- **Staffing levels** — more clinicians means faster throughput, but staffing varies by time of day and day of the week
- **Bed availability** — if the department is full and patients are waiting for ward beds, new assessments slow down
- **Specialist availability** — if your condition needs a specialist opinion (orthopaedics, psychiatry, paediatrics), you wait for that team's availability as well as the general queue
- **Diagnostic load** — if many patients ahead of you need blood tests or imaging, the results queue grows

Our guide on [how wait times are measured](/guides/understanding-wait-times/) explains how the published wait-time figures relate to your actual experience.

## How to make the most of triage

- **Be honest and specific** about your symptoms. Do not downplay them to seem brave, and do not exaggerate to try to get seen faster. Both lead to worse outcomes.
- **Mention all relevant history.** If you have a heart condition and are presenting with chest pain, say so immediately — it changes the risk assessment.
- **Bring your [medications list](/guides/what-to-bring-ae/).** Drug interactions and current treatments directly affect triage decisions.
- **Ask your triage category** if it is not volunteered. You have the right to know where you stand.
- **Bring a companion** if possible. A companion can corroborate your account, remind you of details you might forget under stress, and advocate on your behalf if you become too unwell to communicate effectively.

## Triage for specific populations

### Children

Paediatric triage uses age-adjusted vital sign thresholds. A heart rate of 140 is concerning in an adult but may be normal in a toddler. Triage nurses use age-specific charts, so knowing your child's exact age in months and approximate weight helps them assess accurately. See our [children's A&E guide](/guides/children-ae-guide/) for more.

### Older adults

Older patients may present atypically — confusion instead of fever, falls instead of chest pain, drowsiness instead of breathlessness. Experienced triage nurses know this, but if you are accompanying an older adult, explain what has changed from their baseline. "She was fine yesterday and now she can't stand" is powerful triage information. Our [elderly A&E guide](/guides/elderly-ae-guide/) covers additional considerations.

### Mental health presentations

Mental health crises are triaged using the same urgency framework. A patient who has taken an overdose or is actively self-harming is triaged as high priority for physical safety. A patient in severe psychological distress but physically unharmed may be categorised lower, which can feel dismissive but reflects the physical-safety focus of the triage system. Our [mental health crisis guide](/guides/mental-health-crisis/) explains what to expect.

## Common frustrations and why they happen

**"People are going in before me."** This is almost always because they are in a higher triage category. It is not queue-jumping.

**"I have been here three hours and no one has told me anything."** This is a genuine service failure. You have the right to request an update. Approach reception and ask calmly.

**"They just put me in category 4 and I am in real pain."** Pain alone does not determine triage category — clinical risk does. However, if your pain is escalating or you develop new symptoms, ask to be re-triaged. You can also ask for pain relief while you wait — triage nurses can sometimes administer or request analgesia before you see a doctor.

## Bottom line

Triage exists to ensure the sickest patients are seen first, regardless of when they arrived. Understanding this removes frustration and helps you engage constructively with the process. If your condition changes while you wait, speak up. If you are triaged as low priority and face a long wait, consider whether a [UTC or alternative service](/guides/ae-or-utc/) might meet your needs faster. And always [check live wait times](/hospitals/) before choosing which department to visit.
`,
  },
  {
    slug: "when-to-call-999",
    title: "When to Call 999: Recognising a True Medical Emergency",
    description: "Clear guidance on which symptoms and situations warrant a 999 call and what happens when the ambulance arrives.",
    category: "Choosing a Service",
    readTime: "7 min read",
    lastReviewed: "August 2026",
    content: `
## The purpose of 999

The 999 ambulance service exists for one thing: getting emergency medical help to people whose lives are at immediate risk or who are suffering a condition where rapid treatment changes the outcome. Every call uses shared resources — ambulances, paramedics, dispatchers — so understanding when 999 is appropriate protects both you and others who may need those resources at the same time.

This guide covers the symptoms and situations where 999 is the right call, the situations where a different service is better, and what happens after you dial.

## Always call 999 for these symptoms

### Chest pain

Chest pain is the single most common reason for 999 calls, and for good reason. Heart attacks are time-sensitive emergencies where every minute of delay reduces the chance of a good outcome. Call 999 if you or someone with you has:

- Crushing, squeezing or heavy pressure in the centre of the chest
- Pain that spreads to the jaw, neck, shoulder, arm or back
- Chest pain combined with sweating, nausea, breathlessness or dizziness
- Chest pain in someone with known heart disease

While waiting for the ambulance, have the person sit down in a comfortable position (usually leaning slightly forward) and give them a 300 mg aspirin to chew if available and they are not allergic. Our [chest pain guide](/guides/chest-pain-guide/) covers the full range of chest pain causes and how to tell the serious from the benign.

### Stroke symptoms (FAST)

A stroke happens when blood supply to part of the brain is cut off. Treatment within hours can dramatically reduce permanent damage. Use the FAST test:

- **F**ace — has the face fallen on one side? Can they smile?
- **A**rms — can they raise both arms and keep them there?
- **S**peech — is their speech slurred or garbled? Can they speak a full sentence?
- **T**ime — if you see any of these signs, call 999 immediately

Do not drive the person to hospital yourself. Ambulance crews alert the stroke team en route, so the right specialists are assembled and ready when the patient arrives.

### Breathing difficulty

Call 999 if someone:

- Cannot speak in full sentences because they are too breathless
- Is turning blue around the lips, fingertips or face
- Is breathing very fast and working hard — using neck and stomach muscles to breathe
- Has stopped breathing or is only gasping
- Has a known condition like asthma and their reliever inhaler is not working after repeated doses

### Severe bleeding

Call 999 if:

- Blood is spurting from a wound (arterial bleeding)
- Bleeding cannot be controlled with direct pressure after 10 minutes
- The person is becoming pale, cold, sweaty or confused — signs of significant blood loss
- The wound is deep and involves the neck, chest or abdomen

While waiting, apply firm pressure to the wound with a clean cloth and do not remove it. If blood soaks through, add another layer on top.

### Unconsciousness or collapse

Call 999 if someone:

- Has collapsed and is not responsive — they do not react to your voice or to being gently shaken
- Is having a seizure lasting more than five minutes, or has repeated seizures without recovering between them
- Has collapsed after a known allergic exposure (anaphylaxis) — give their adrenaline auto-injector if available, then call 999
- Is unconscious after a head injury — see our [head injury guide](/guides/head-injury-guide/) for the full spectrum of severity

### Severe allergic reactions (anaphylaxis)

Symptoms escalate rapidly and include:

- Swelling of the throat, tongue or face
- Difficulty breathing or swallowing
- Feeling faint, dizzy or collapsing
- A rapid, widespread rash or hives

If the person has an adrenaline auto-injector (EpiPen), help them use it immediately, then call 999 even if symptoms seem to improve — a second reaction can occur.

### Suspected poisoning or overdose

Call 999 if someone has taken an overdose of medication, ingested a toxic substance, or is showing signs of poisoning (confusion, vomiting, drowsiness, breathing changes). Even if the person seems fine initially, some substances have delayed effects. Do not try to make them vomit.

### Major trauma

Call 999 for:

- Road traffic collisions with significant impact
- Falls from height (generally more than twice the person's own height)
- Stab wounds or gunshot injuries
- Crush injuries
- Near-drowning

## When 999 is not the right call

The following conditions are urgent but not emergencies. They need medical attention today but do not require an ambulance:

- **Sprains, simple fractures and minor injuries** — drive or get a lift to a [UTC or A&E](/guides/ae-or-utc/), or call [111](/guides/nhs-111-guide/)
- **Moderate abdominal pain** without signs of severe illness
- **Fever in an adult** who is alert, drinking and oriented
- **Chronic conditions** that have worsened but are not acutely dangerous
- **Minor burns** — small, superficial burns that are painful but not on the face, hands, feet or genitals
- **Dental emergencies** — call 111 for an out-of-hours dentist
- **Non-emergency mental health distress** — call your crisis team, Samaritans (116 123), or 111 — see our [mental health crisis guide](/guides/mental-health-crisis/)

## What happens when you dial 999

### The call

A dispatcher answers and asks a series of structured questions: Is the patient breathing? Are they conscious? What happened? Where are you? The dispatcher uses your answers to categorise the call and assign a response.

Stay on the line. The dispatcher may give you life-saving instructions while the ambulance is on its way — CPR guidance, advice on controlling bleeding, how to position an unconscious person in the recovery position. Follow their instructions carefully.

### The ambulance arrives

Paramedics carry equipment for advanced life support: defibrillators, oxygen, intravenous medications, splints and stretchers. They will assess the patient rapidly and begin treatment on scene. They may:

- Stabilise the patient and transport to hospital
- Treat on scene and advise that hospital is not needed (this is more common than many people expect)
- Call for additional resources — a specialist car, an air ambulance, or a second crew

### At hospital

If you are transported to A&E, the paramedics provide a clinical handover to the hospital team. This means your information — observations, history, treatment given — is passed directly to the receiving nurse or doctor. You do not go through the standard waiting-room queue; you are taken directly into the department.

## Teaching children to call 999

Children as young as four can learn to dial 999. Teach them:

- When to call: "If mummy or daddy falls down and won't wake up"
- What to say: their name, address, and "someone is very poorly"
- To stay on the phone and answer questions

This simple training has saved lives in cases where a parent has collapsed at home with a child present.

## What if I am not sure?

Uncertainty is normal. The general principle is simple: **if you think it might be an emergency, call 999.** Dispatchers are trained to assess the situation over the phone and will tell you if a different service is more appropriate. You will never be penalised for calling in good faith.

Some people hesitate because they worry about wasting ambulance time. While it is true that ambulance services are under pressure, the risk of delaying a genuine emergency far outweighs the cost of a call that turns out to be non-urgent. Dispatchers deal with uncertain callers every shift — it is part of the job, and they would rather you called than not.

If your situation is urgent but you are reasonably certain it is not an emergency — for example, a suspected fracture with no deformity, or abdominal pain that is uncomfortable but not severe — [111](/guides/nhs-111-guide/) is the better first call. The 111 service can assess whether you need an ambulance or whether another route is faster.

## After calling 999

While waiting for the ambulance:

- Stay on the phone with the dispatcher — they may give you life-saving instructions
- Clear a path for the paramedics — unlock the front door, turn on lights, move furniture out of the way
- If possible, have someone wait outside to flag down the ambulance, especially if your property is hard to find
- Gather the patient's medication if time allows — paramedics find this information valuable
- Keep pets away from the entrance
- Do not give the patient food, drink or medication unless the dispatcher specifically tells you to (aspirin for suspected heart attack is the main exception)

## Bottom line

Call 999 for chest pain, stroke symptoms, severe breathing difficulty, heavy uncontrollable bleeding, unconsciousness, anaphylaxis, suspected poisoning, and major trauma. For everything else, consider [111](/guides/nhs-111-guide/), your [local A&E or UTC](/guides/ae-or-utc/), or your GP. When in doubt, it is always better to call and be told it is not an emergency than to delay a call that was genuinely needed. Check [live A&E wait times](/hospitals/) once you know which hospital you are heading to.
`,
  },
  {
    slug: "understanding-wait-times",
    title: "How A&E Wait Times Are Measured and What They Really Mean",
    description: "Decoding the numbers: what hospitals actually measure, how the data reaches you, and what it tells you about your likely experience.",
    category: "Understanding A&E",
    readTime: "7 min read",
    lastReviewed: "August 2026",
    content: `
## Why understanding the numbers matters

When you check live A&E wait times on this site — or on a hospital's own dashboard — you see a number, usually in minutes or hours. But what does that number actually represent? Is it how long you will personally wait? Is it an average? A median? The time from arrival to being seen, or arrival to leaving?

The answer varies by hospital, and misunderstanding what the number means can lead to frustration or poor decision-making. This guide breaks down exactly what hospitals measure, how the data flows to you, and how to interpret it for your own situation.

## What hospitals actually measure

### Time in department

The most commonly published metric is **time in department** — the total time from registration to departure (whether that departure is discharge home, admission to a ward, or transfer to another hospital). This is the figure used in the NHS four-hour standard: the operational target that 76 per cent of patients should be admitted, transferred or discharged within four hours of arrival.

When a hospital dashboard shows "current wait: 3 hours," it typically means that patients currently in the department are spending roughly three hours from registration to departure. This includes everything: triage, waiting, clinical assessment, investigations, waiting for results, treatment, and the decision to admit or discharge.

### Time to be seen

Some hospitals instead publish **time to first clinical assessment** — the time from registration to when a doctor or nurse practitioner first sees you. This is usually shorter than time in department because it excludes the investigation and treatment phases. A department might show "current wait to be seen: 45 minutes" while the total time in department is three hours.

### Which metric this site shows

On this site, we display the metric that each hospital publishes on its own dashboard. For most hospitals, this is time in department. Where a hospital publishes time to be seen instead, the listing notes this. This inconsistency is unavoidable — we cannot standardise what different NHS trusts choose to measure — but we always show the source so you can make an informed comparison.

## How the data reaches you

### Hospital-side

Each hospital's A&E department runs an electronic patient tracking system. When a patient checks in, a clock starts. When they are discharged or admitted, the clock stops. The system continuously calculates aggregated wait times — averages, medians, or rolling figures — and publishes them to an internal dashboard.

Some hospitals then expose this data externally: on their website, through a public API, or on a dedicated waiting-times page. This is the data we collect. Not all hospitals publish live wait times — coverage is limited to trusts that choose to make this information public. You can see which hospitals we currently track on our [hospitals page](/hospitals/).

### Our collection process

We query each hospital's public data source at regular intervals — typically every 15 to 30 minutes. The timestamp you see ("Refreshed: 15 min ago") tells you when we last successfully retrieved data from that hospital. If a hospital's feed goes down, we show the last known reading with a note about its age.

We do not modify, adjust or model the data. What the hospital publishes is what you see. We add context — the freshness indicator, the delta from the previous reading, regional averages — but the core wait-time figure comes directly from the trust.

## What the number tells you — and what it does not

### What it tells you

- **Relative busyness.** If Hospital A shows 2 hours and Hospital B shows 4 hours, Hospital A is almost certainly faster right now. This comparative use is the most reliable application of the data.
- **Trends.** If a hospital's wait time has been climbing through the afternoon, the department is filling up. If it has been falling since midnight, it is clearing out.
- **Rough magnitude.** A 90-minute reading means you are very unlikely to be out in 30 minutes, and a 300-minute reading means you should prepare for a long visit.

### What it does not tell you

- **Your personal wait time.** Published figures are aggregates — averages or rolling medians across all patients. Your individual experience will differ based on your triage category. A category-2 patient will be seen much faster than the published average; a category-5 patient may wait much longer. Our [triage guide](/guides/triage-explained/) explains the categories.
- **Whether the department is right for you.** A short wait time does not mean the department is the best choice for your condition. An [Urgent Treatment Centre](/guides/ae-or-utc/) may be more appropriate regardless of how quiet the A&E looks.
- **Future wait times.** The number is a snapshot. A quiet department at 4 pm may be overwhelmed by 6 pm as the after-work surge arrives. Our guide on [the busiest times](/guides/busiest-times-ae/) covers these patterns.

## Common misconceptions

### "The wait time told me 2 hours so I should be out in 2 hours"

Not necessarily. The figure is an aggregate of recent patients, and your time depends on your triage category, what investigations you need, and how busy the department becomes after you arrive. Treat the number as a guide to relative busyness, not a personal time estimate.

### "This department always shows 4 hours — something must be wrong"

Some departments in high-demand areas consistently show long wait times. This reflects sustained high volume, not a broken system. These departments are still staffed and functioning; they are simply busier than average. If you regularly see long wait times at your nearest department, knowing the [quietest times to arrive](/guides/busiest-times-ae/) becomes especially valuable.

### "The wait time went up while I was in the waiting room — am I being pushed back?"

Not in the way you might think. The published figure reflects the experience of all patients in the department, not just those in the waiting room. If several high-acuity ambulances arrive, the published time can rise even though your position in the queue has not changed. It means the department is absorbing more work, which may slow everything down — but you have not lost your place.

### "Hospital A shows 90 minutes and Hospital B shows 45 minutes — I should drive to Hospital B"

Probably, but consider the drive time. If Hospital B is 40 minutes further away, your total time (drive plus wait) may be comparable. Also consider whether the two hospitals measure the same metric — 90 minutes of time-in-department at Hospital A might equate to 45 minutes of time-to-be-seen at Hospital B if they publish different metrics.

## How to use wait times effectively

The most practical approach:

1. **Compare, do not fixate on absolutes.** Use the numbers to identify the least busy department among your options. Check our [near-me tool](/near-me/) to see departments ranked by current wait.
2. **Factor in travel time.** A 20-minute drive to a department showing 60 minutes will get you out sooner than walking to a department showing 180 minutes.
3. **Check the trend.** If waits have been rising for the past two hours, the department is filling up. If they have been falling, you are catching a good window.
4. **Read the freshness timestamp.** A reading from 3 hours ago may not reflect current conditions. Recent data (within 30 minutes) is much more reliable.
5. **Remember that triage matters more than wait time.** If your condition is genuinely urgent, you will be seen ahead of the average regardless of the published number.

## The four-hour standard

You will often hear reference to the "four-hour A&E target." This is the NHS operational standard that 76 per cent of A&E patients should be admitted, transferred or discharged within four hours of arrival. The remaining 24 per cent includes complex cases that legitimately require longer assessment and patients waiting for specialist beds.

This standard is a system-level performance metric, not a guarantee for individual patients. Some patients — those triaged as category 1 or 2 — are seen and treated well within four hours. Others — particularly those waiting for ward beds or specialist opinions — may exceed it. The standard exists to hold the system accountable, not to set expectations for any single visit.

Performance against the four-hour standard varies by region, time of year and day of the week. Winter months consistently show longer waits due to respiratory illness surges, and Monday mornings often see a backlog of patients who delayed attending over the weekend. You can explore regional variation in our [regions directory](/regions/) to see how departments in your area compare.

## Bottom line

Wait-time numbers are most useful as a comparative tool: which department is busiest right now, and how does today compare to yesterday? They are least useful as a personal time estimate, because your experience depends heavily on your triage category and what happens in the department after you arrive. [Compare departments](/near-me/) before you travel, understand what the number measures, and plan your timing using our [busiest-times guide](/guides/busiest-times-ae/). For more on reducing your personal wait regardless of the department's aggregate figures, see our [practical tips guide](/guides/reduce-ae-wait/).
`,
  },
  {
    slug: "ae-patient-rights",
    title: "Your Rights as an A&E Patient",
    description: "What the NHS Constitution guarantees you in A&E, including consent, dignity, communication and how to raise concerns.",
    category: "Patient Rights",
    readTime: "7 min read",
    lastReviewed: "August 2026",
    content: `
## The NHS Constitution applies in A&E

The NHS Constitution sets out rights that apply to every patient in every NHS service, including A&E. These are not aspirational guidelines — they are legal entitlements. Understanding them helps you navigate your visit and speak up when something is not right. This guide covers the rights most relevant to an A&E visit.

## The right to be treated with dignity and respect

Every patient must be treated with dignity regardless of age, disability, gender, race, religion, sexual orientation, socioeconomic status or any other characteristic. In practical terms, this means:

- Staff should address you by the name you prefer and use the pronouns you specify
- Physical examinations should take place in a private area, not in public view
- You should be offered a gown or covering if you need to undress
- Your cultural and religious needs should be respected where possible — for example, requesting a same-sex clinician for intimate examinations
- You should not be spoken about as though you are not present, even during medical handovers

A&E departments are busy and pressured environments, and staff are often managing multiple patients simultaneously. If you feel your dignity is not being respected, you have the right to say so — calmly and clearly — to the nurse or doctor, or to ask to speak to the nurse in charge of the department.

## The right to information

You have the right to have your condition explained to you in language you can understand. This includes:

- **What staff think is wrong** — even if they are not certain, they should share their working diagnosis
- **What tests are being done and why** — you should know what each investigation is looking for
- **What treatment is proposed** — including alternatives, risks and expected outcomes
- **What the plan is** — whether you are being discharged, admitted or referred, and what happens next

If English is not your first language, you have the right to request an interpreter. Most hospitals have access to telephone interpretation services covering dozens of languages, available 24 hours a day. A family member can translate if you prefer, but you should not be forced to rely on a family member (particularly a child) for medical interpretation.

If you have a hearing impairment, request a sign language interpreter or written communication. If you have a learning disability, staff should use accessible communication tools and allow extra time for explanations.

## The right to consent

No medical treatment can be given to you without your informed consent, except in very specific circumstances. Consent means you understand what is being proposed, why it is being proposed, what the alternatives are, and what the risks are — and you agree to proceed.

### Verbal consent

For most A&E treatments — examinations, blood tests, X-rays, wound closure — verbal consent is sufficient. The clinician explains what they want to do, and you say yes. You can also refuse. Refusing a specific investigation or treatment does not mean you lose the right to other care.

### Written consent

For more significant interventions — procedures under sedation, surgery, certain invasive investigations — you will be asked to sign a consent form. Read it and ask questions before signing.

### Capacity

If a patient cannot give consent because they are unconscious, confused or lack mental capacity, clinicians can treat them under the principle of acting in their best interests. This is governed by the Mental Capacity Act 2005. The key principle is that capacity is assumed unless there is evidence to the contrary — a person is not automatically assumed to lack capacity because they have a mental health condition, a learning disability, or are elderly.

### Children and consent

For children under 16, a parent or guardian normally gives consent. Young people aged 16 and 17 can consent to treatment themselves. Children under 16 can also consent if they are assessed as having sufficient understanding (known as Gillick competence). Our [children's guide](/guides/children-ae-guide/) covers paediatric-specific considerations.

### Refusing treatment

You have the right to refuse any treatment, even if refusing is medically inadvisable. Staff should explain the consequences of refusal but cannot force treatment on a competent adult. If you refuse treatment and wish to leave, you will normally be asked to sign a form acknowledging that you are leaving against medical advice. You can still return later if you change your mind.

The exception is treatment under the Mental Health Act, where a patient can be treated for a mental disorder without consent under specific legal conditions. Our [mental health crisis guide](/guides/mental-health-crisis/) covers this.

## The right to privacy and confidentiality

Your medical information is confidential. Staff should not discuss your case where others can overhear — though in a busy A&E, this is sometimes difficult to achieve completely. If you are concerned about being overheard, you can request to be moved to a private room or ask that sensitive discussions happen away from other patients.

Your records should not be shared with anyone who is not directly involved in your care without your permission. There are limited exceptions: safeguarding concerns, legal requirements, and public health notifications.

If someone — a relative, friend, employer — calls the hospital asking about you, staff should not confirm or deny your presence without your consent. You can specify who may and may not be given information about you.

## The right to complain

If you are unhappy with any aspect of your care, you have the right to raise a concern. This does not affect your treatment — no NHS service can withdraw care because a patient has complained.

Our [complaints and feedback guide](/guides/ae-complaints-pals/) covers the full process in detail, but in summary:

- **During your visit,** speak to the nurse in charge or the clinical lead. Many issues can be resolved immediately.
- **After your visit,** contact the hospital's PALS (Patient Advice and Liaison Service). PALS can investigate and facilitate a response.
- **Formal complaint,** in writing to the hospital's complaints department. You should receive an acknowledgement within three working days and a full response within a defined timeframe.
- **If unresolved,** escalate to the Parliamentary and Health Service Ombudsman (PHSO), which is the independent body that reviews NHS complaints.

## The right to access your records

You can request a copy of your A&E records — the notes, observations, test results and treatment details from your visit. Under the UK General Data Protection Regulation, the hospital must provide these within one calendar month and cannot charge a fee. You can make a Subject Access Request to the hospital's medical records department.

Having your records is useful for follow-up appointments with your GP, for insurance purposes, or if you want to understand what happened during your visit. Our [after discharge guide](/guides/after-ae-discharge/) explains how to use this information as part of your ongoing care.

## The right to a second opinion

If you disagree with the clinical assessment or treatment plan, you can request a second opinion from another clinician within the department. This is not confrontational — it is a recognised patient right. In practice, A&E clinicians often consult with colleagues informally, and asking for a second perspective is entirely reasonable.

## Advocacy and support

If you are struggling to communicate your needs or feel your rights are not being upheld, you can ask for an advocate. Hospitals have access to independent advocacy services, particularly for patients with mental health conditions (Independent Mental Health Advocates), learning disabilities, or communication difficulties. A friend or family member can also advocate on your behalf — let staff know who has your permission to speak for you.

## Practical tips for exercising your rights

- **Ask questions.** You are not being difficult by asking what is happening and why. Informed patients make better decisions about their own care.
- **Take notes.** If you are concerned about your care, note the time, the staff member's name or role, and what happened. This helps if you need to raise a concern later.
- **Bring someone with you.** A companion can help you remember information, ask questions you might forget, and advocate on your behalf.
- **Know your [triage category](/guides/triage-explained/).** Ask the triage nurse what category you have been assigned. Understanding where you stand helps you gauge whether your wait is typical.
- **Speak up if symptoms change.** This is both a right and a safety measure. If you deteriorate while waiting, staff need to know immediately.
- **Request an interpreter.** If English is not your first language, you have the right to a professional interpreter — do not rely on family members, especially children, to translate medical information.

## Bottom line

You have the right to dignified care, clear information, informed consent, privacy, and the ability to complain without reprisal. These rights exist in A&E just as they do in any other NHS setting. Understanding them helps you participate actively in your own care and ensures you receive the standard of treatment you are entitled to. If you feel your rights have been violated, our [complaints guide](/guides/ae-complaints-pals/) walks through the process step by step, and our [hospital directory](/hospitals/) lists contact details for every trust.
`,
  },
  {
    slug: "elderly-ae-guide",
    title: "A&E for Older Adults: Extra Considerations and Support",
    description: "Practical guidance for older patients and their carers navigating the emergency department, including mobility, medication and cognitive concerns.",
    category: "Family Care",
    readTime: "7 min read",
    lastReviewed: "August 2026",
    content: `
## Why A&E visits are different for older adults

Older adults — generally those over 65, though age is less important than frailty — face distinct challenges in A&E. They are more likely to have multiple medical conditions, take numerous medications, experience confusion in unfamiliar environments, and have mobility limitations that make long waits physically difficult. They are also more likely to need admission and to experience complications from both their presenting condition and the A&E environment itself.

This guide covers the specific considerations for older adults attending A&E, whether you are the patient yourself or accompanying an older relative or friend.

## Common reasons older adults attend A&E

### Falls

Falls are the most common reason for A&E attendance in older adults and the leading cause of injury-related death in over-65s. The consequences range from minor bruising to hip fractures and head injuries. What makes falls particularly significant in older adults is the potential for underlying causes — medication side effects, postural hypotension, cardiac arrhythmias, infection — and the risk of serious injury from relatively minor mechanisms.

If an older person has fallen, our [fractures and sprains guide](/guides/fractures-sprains-guide/) covers when a fall needs A&E and when it can be managed with a UTC or GP visit. Our [head injury guide](/guides/head-injury-guide/) is particularly relevant for older adults, who are at higher risk of subdural haematomas — slow bleeds inside the skull that can develop days after an apparently minor head knock.

### Infections

Urinary tract infections, chest infections and skin infections in older adults can present very differently from younger patients. Instead of the classic symptoms, an older person may simply become confused, drowsy, unsteady or stop eating. These non-specific presentations often delay recognition, meaning the infection is more advanced by the time they reach A&E.

### Breathlessness

Heart failure, chronic obstructive pulmonary disease (COPD), pneumonia and pulmonary embolism all become more common with age. Breathlessness that comes on suddenly or gets significantly worse over hours warrants A&E assessment.

### Confusion and delirium

New confusion in an older adult is a medical emergency until proven otherwise. It can signal infection, stroke, medication toxicity, dehydration, metabolic disturbance or many other treatable conditions. Do not assume confusion is just "old age" — it always needs investigation. If the person is already known to have dementia, a sudden change from their baseline level of confusion is equally significant.

## Preparing for the visit

Preparation makes an even bigger difference for older adults than for younger patients. Our general [what to bring guide](/guides/what-to-bring-ae/) covers the essentials, but for older adults, add:

- **A complete, up-to-date medication list.** This is critical. Older adults often take multiple medications prescribed by different doctors, and interactions and side effects are common causes of A&E presentations. If you cannot list them, bring the medication boxes or blister packs. A photograph of each box is a good backup.
- **Details of their GP and any community services involved** — district nurses, social workers, community matrons, care agency details.
- **A brief summary of their medical history** — conditions, previous operations, known allergies. If they carry a medical summary card, bring it.
- **Mobility aids** — walking stick, zimmer frame, wheelchair. The department may have some, but their own equipment will be more familiar and comfortable.
- **Hearing aids, glasses and dentures** — these are frequently lost in hospital. Bring a labelled case for each.
- **Continence pads** if used — the department will provide them, but having familiar supplies reduces dignity concerns.
- **Warm clothing and a blanket** — A&E departments can be cold, and older adults are more susceptible to hypothermia in clinical environments.

## During the visit

### Advocate actively

If you are accompanying an older adult, your role as an advocate is vital. Speak up about their baseline condition — what is normal for them and what has changed. A person with dementia who is confused in A&E may be dismissed as "just confused" unless someone explains that yesterday they were alert, conversational and walking unaided.

### Communicate their needs clearly

Tell staff about:
- Hearing difficulties — which side is better, whether they use aids
- Vision impairment — ensure they have their glasses
- Cognitive impairment — their normal level of function and what has changed
- Mobility — what they can normally do versus what they can do now
- Dietary needs — diabetes, swallowing difficulties, food allergies
- Continence — whether they normally manage independently or need assistance

### Monitor for delirium

A&E environments can trigger or worsen delirium in older adults: bright lights, noise, disrupted sleep, unfamiliar surroundings, pain, dehydration, constipation and medication changes are all triggers. Signs of delirium include increased confusion, agitation, hallucinations, drowsiness, or rapid fluctuation between these states.

If you notice these changes developing, tell staff immediately. Delirium is a medical condition that needs assessment and treatment, not a behavioural problem to be managed.

### Ensure comfort

Long waits on hard waiting-room chairs can be extremely difficult for older adults with arthritis, back pain or pressure-sore risk. If your relative is struggling, ask whether a trolley or reclining chair is available. If they are diabetic, ensure their blood sugar is monitored and meals are not missed. Keep them hydrated unless staff have said nil by mouth.

## The triage process for older adults

[Triage](/guides/triage-explained/) follows the same system for all patients, but experienced triage nurses know that older adults often present differently. Vital signs need age-specific interpretation — a heart rate of 90 may be significant in someone normally at 60, even though 90 is technically within normal range. Pain may be underreported because of stoicism, cognitive impairment or the mistaken belief that pain is just part of aging.

If you feel the triage assessment has not captured the full picture, say so. "They're not normally like this" is one of the most valuable things a companion can say in triage.

## Medication review

One of the most important things A&E does for older adults — though it is often invisible — is reviewing their medication. Polypharmacy (taking five or more medications) is extremely common in older adults, and drug interactions, side effects and dosing errors are frequent contributors to A&E presentations. Falls, confusion, dizziness, bleeding and nausea can all be medication-related.

Ensure the treating clinician has your full medication list, including over-the-counter medications, herbal supplements and anything recently started or stopped.

## Admission considerations

Older adults are more likely to be admitted than younger patients, and the admission decision involves different considerations. Staff will assess not just the medical condition but also:

- Whether it is safe for the person to return home
- Whether they can manage stairs, cooking, toileting and medication independently
- Whether existing care packages (carers, meals services) are adequate given the new situation
- Whether equipment (hospital bed at home, commode, raised toilet seat) is needed

A discharge to assess or hospital at home team may be involved. These teams can sometimes set up enhanced care at home within hours, avoiding a hospital admission that carries its own risks — deconditioning, hospital-acquired infections and disorientation in unfamiliar environments.

## After the visit

Recovery from illness or injury takes longer in older adults, and the risk of complications is higher. Our [after discharge guide](/guides/after-ae-discharge/) covers follow-up care, but for older adults specifically:

- **Medication changes:** If any medications were started, stopped or changed, ensure the GP knows within 48 hours. Medication errors at the hospital-to-home transition are a common and serious problem.
- **Falls follow-up:** If the visit was fall-related, ask the GP about a falls risk assessment and referral to falls prevention services.
- **Rehabilitation:** Physiotherapy, occupational therapy and reablement services can help restore independence after a hospital visit.
- **Monitoring for deterioration:** Older adults can deteriorate after discharge as the stress of the visit and any new treatment takes effect. Watch for increasing confusion, reduced mobility, poor eating and drinking, and new symptoms.

## Loneliness and repeat attendance

Older adults who live alone and have limited social contact are significantly more likely to attend A&E repeatedly, sometimes for conditions that could be managed in the community. If you notice a pattern of frequent A&E visits for a relative or neighbour, it may indicate unmet social or care needs rather than purely medical ones. Speak to their GP about a social prescribing referral, Age UK services, or local befriending schemes. Addressing isolation can improve health outcomes and reduce the distress of repeated emergency department visits.

## Bottom line

A&E visits for older adults require more preparation, more advocacy and more follow-up than for younger patients. Bring a comprehensive medication list, communicate baseline function clearly, and watch for delirium. If A&E is not urgently needed, [111](/guides/nhs-111-guide/) can sometimes arrange alternatives — a GP home visit, a community assessment team or an [out-of-hours service](/guides/out-of-hours-care/) that avoids the stress of the emergency department entirely. When A&E is needed, [check current wait times](/near-me/) to choose the quietest option and time the visit for a [less busy period](/guides/busiest-times-ae/) if the condition allows.
`,
  },
  {
    slug: "what-to-bring-ae",
    title: "What to Bring to A&E: The Complete Checklist",
    description: "Everything you should pack before heading to the emergency department, plus what to leave behind.",
    category: "Patient Tips",
    readTime: "7 min read",
    lastReviewed: "September 2026",
    content: `
## Why preparation matters

An A&E visit can last anywhere from two hours to well over eight. Bringing the right items makes the experience more comfortable for you and helps clinicians treat you more efficiently. Arriving without your medication list, for example, can add time to your assessment while staff try to access your records. Arriving without a phone charger can leave you isolated and unable to contact family during a long wait.

This guide covers everything worth bringing, organised by priority. It also covers what to leave at home.

## Essential documents and information

These items directly speed up your care:

### Medication list

This is the single most important thing you can bring. Every clinician who assesses you will ask what medications you take. If you can hand them a complete list — drug name, dose, frequency and when you last took each one — it saves time and reduces the risk of errors or interactions.

Options for providing this information:
- A printed or handwritten list kept in your wallet or on the fridge
- Photographs of your medication boxes on your phone
- The NHS App, which shows your GP-prescribed medications
- The physical boxes or blister packs themselves — this is the gold standard for accuracy

Include over-the-counter medications (ibuprofen, antihistamines, supplements) and anything you have taken today for the current problem.

### Allergies

Know your allergies and what reaction they cause. "Allergic to penicillin" is useful. "Allergic to penicillin — causes rash and swelling" is much more useful because it helps clinicians judge severity and choose alternatives. True anaphylactic allergies (difficulty breathing, throat swelling, cardiovascular collapse) should be distinguished from intolerances (mild nausea, stomach upset).

### NHS number

Your 10-digit NHS number lets staff access your records instantly. You can find it on:
- Previous hospital letters or discharge summaries
- Your GP surgery's online patient portal
- The NHS App
- Prescription prepayment certificates

If you do not know it, staff can look you up by name, date of birth and address — it just takes slightly longer.

### Brief medical history

If you have complex medical history, a one-page summary is enormously helpful. Include:
- Current diagnoses (diabetes, asthma, heart failure, etc.)
- Previous significant operations
- Any implanted devices (pacemaker, joint replacement, stent)
- Recent hospital admissions or investigations
- Name of your GP surgery

### Photo ID

Not required, but helpful if there are patients with similar names, or if you are visiting a hospital that does not have your records.

## Comfort items

These do not speed up your care but make the wait bearable:

### Phone charger

Non-negotiable for a long visit. A&E waiting rooms often have power sockets, but not always near your seat. A portable battery pack is more reliable. Your phone is your connection to family, your source of entertainment, and — if you use the NHS App — your medication record.

### Food and drink

Hospital vending machines are expensive and often empty. A&E departments rarely provide meals to patients in the waiting room (though they may offer tea and biscuits). Bring:
- Water — a refillable bottle you can fill at a water fountain
- Easy-to-eat snacks — cereal bars, fruit, sandwiches
- Avoid anything that requires heating or generates strong smells

If you are diabetic, bring your own glucose monitoring kit and hypo treatment (glucose tablets, sugary drink) and make sure staff know you are diabetic at triage.

**Important:** If there is any chance you might need surgery or sedation, staff may ask you not to eat or drink. Follow their instructions — they will tell you if nil by mouth applies.

### Something to do

A&E waits are boring. Bring:
- A book, magazine or Kindle
- Headphones for your phone (wireless preferred — wired headphones can snag during examinations)
- Downloaded content — hospital WiFi is often slow, unreliable or requires registration. Download podcasts, shows or audiobooks before you leave home.

### Warm layers

Hospitals are air-conditioned and can be surprisingly cold, especially if you are sitting still for hours. A hoodie, cardigan or blanket scarf serves double duty as a comfort item and pillow.

### Change of clothes

If your current clothes are bloodstained, wet, cut by paramedics, or may be removed for examination, having clean replacements saves the discomfort of wearing a hospital gown home. Pack light — a t-shirt, joggers and underwear in a carrier bag.

## Condition-specific items

Depending on why you are going, consider:

- **Asthma** — your reliever inhaler (blue), spacer if you use one, and your asthma action plan if you have one
- **Diabetes** — glucose monitor, test strips, insulin pen or pump supplies, hypo treatment, a letter from your specialist if your regimen is complex
- **Epilepsy** — a record of recent seizure frequency and your emergency medication (buccal midazolam or rectal diazepam) if prescribed
- **Pregnancy** — your maternity notes (the handheld record your midwife gave you), or the digital version if your trust uses one
- **Mental health** — details of your community mental health team, crisis plan if you have one, and any current psychiatric medication. Our [mental health crisis guide](/guides/mental-health-crisis/) covers what to expect
- **Mobility** — your own walking stick, frame or wheelchair if you use one. Crutches may be available at A&E, but your own equipment is more comfortable

## For children

If bringing a child, pack everything above plus the items in our [children's A&E guide](/guides/children-ae-guide/): nappies, spare clothes, comfort toy, milk or formula, snacks, downloaded entertainment, and the red book if you have it.

## For older adults

Our [elderly A&E guide](/guides/elderly-ae-guide/) covers additional items for older patients: hearing aids, glasses, dentures (in labelled cases), continence supplies, warm clothing, and details of any care services or community nursing involved.

## What to leave at home

- **Valuables** — jewellery, large amounts of cash, expensive electronics beyond your phone. A&E departments are busy public spaces and theft, while uncommon, does occur. The hospital will not accept responsibility for lost valuables.
- **Weapons** — knives, tools or anything that could be perceived as a weapon. A&E departments have security, and you may be searched.
- **Recreational drugs or alcohol** — do not bring them into the hospital, but do tell staff honestly if you have taken any. This is medical information, not a legal matter, and withholding it can delay or compromise your treatment.

## A quick-grab checklist

For when you need to leave quickly:

1. Phone and charger
2. Medication list (or grab the boxes)
3. NHS number
4. ID
5. Water bottle
6. Snacks
7. Warm layer
8. Headphones
9. Wallet (for parking, vending machines)
10. Carrier bag with spare clothes

Tape this list inside a kitchen cupboard or save it as a note on your phone. In an emergency you will not remember everything, but a glance at the list helps you grab the essentials in under a minute.

## If you arrive unprepared

It happens. You fall, you cut yourself, someone calls 999, and suddenly you are in A&E with nothing but the clothes you were wearing. Do not worry — A&E departments are equipped to treat patients who arrive with nothing. Staff can access your GP records electronically (though this takes longer than having the information to hand), the hospital has blankets, the department has water, and reception can usually lend a phone charger.

If a companion can bring supplies later, ask them to prioritise your medication boxes or list, your phone charger, and a warm layer. Everything else is a comfort, not a necessity.

## Preparing a go-bag in advance

If you have a chronic condition that might require emergency attendance — heart disease, epilepsy, severe asthma, diabetes — consider preparing a small go-bag that stays packed by the front door or in the car boot. Include your medication list, a copy of your latest hospital letter, your NHS number, a phone charger, a cereal bar, a bottle of water and a warm layer. Replace perishable items every few months. This removes the stress of packing under pressure and ensures you never forget the critical items.

For households with young children, keep a similar bag with nappies, a change of clothes, a comfort toy and a snack ready at all times. A&E visits with children are unpredictable in length, and being prepared makes the experience considerably less stressful for everyone. Our [children's guide](/guides/children-ae-guide/) covers paediatric-specific packing. If you care for an elderly relative, our [elderly A&E guide](/guides/elderly-ae-guide/) has a specific section on what to prepare for older patients.

## Bottom line

The medication list is the most important thing you can bring — it directly affects the speed and safety of your care. Everything else is about comfort and communication. Preparing a small go-bag in advance means you are ready for an unplanned visit without the stress of packing under pressure. For more on what happens once you arrive, see our [step-by-step A&E guide](/guides/what-happens-in-ae/), and [check live wait times](/near-me/) before you set off to choose the quietest department near you.
`,
  },
  {
    slug: "out-of-hours-care",
    title: "Out-of-Hours Care: Your Options When the GP Is Closed",
    description: "A complete overview of every NHS service available evenings, nights, weekends and bank holidays — and when each one is the right call.",
    category: "Choosing a Service",
    readTime: "7 min read",
    lastReviewed: "August 2026",
    content: `
## The out-of-hours gap

GP surgeries typically open between 8 am and 6:30 pm, Monday to Friday. Outside those hours — evenings, nights, weekends and bank holidays — you lose access to the service most people use as their first point of contact with the NHS. But medical problems do not keep office hours. Understanding what services are available out of hours, and which one is right for your situation, can save you hours of waiting and ensure you get appropriate care.

Too often, the default answer to "the GP is closed" is "go to A&E." But A&E is designed for emergencies, and attending for a non-emergency problem means a long wait in an environment that is not suited to your needs, while taking up resources intended for the sickest patients. This guide covers every alternative.

## NHS 111 — the front door

Your first step for any out-of-hours health concern should be [NHS 111](/guides/nhs-111-guide/). The service runs 24 hours a day, 365 days a year, and can:

- Assess your symptoms using a clinically validated algorithm
- Provide self-care advice if your condition can be managed at home
- Book you into an out-of-hours GP appointment
- Direct you to the nearest open pharmacy
- Arrange a timed slot at a UTC or A&E if needed
- Dispatch an ambulance if the assessment identifies an emergency

Call 111 or use 111.nhs.uk. The online tool avoids phone queues and is often faster.

## Out-of-hours GP services

Every area in England has a GP out-of-hours service. These are not your regular GP surgery; they are separate services staffed by GPs and other clinicians who work evenings, nights and weekends. You typically access them through 111, which books you an appointment.

Out-of-hours GP services can:
- Assess and diagnose new symptoms
- Prescribe medications (though the formulary may be limited)
- Perform basic examinations
- Provide sick notes
- Refer you to hospital if needed

They operate from designated hubs, usually located at or near hospitals. Some offer telephone consultations first, with face-to-face appointments for patients who need examination.

## Community pharmacies

Pharmacists are qualified healthcare professionals who can assess and treat a wide range of conditions. Many pharmacies now offer extended hours — some are open until 10 pm and on Sundays — and the Pharmacy First programme means they can prescribe for several common conditions without a GP referral.

Conditions pharmacies can help with:

- **Urinary tract infections** in women aged 16–64
- **Sore throat and strep throat** — including antibiotic prescribing after a clinical assessment
- **Sinusitis** — assessment and treatment
- **Impetigo** — diagnosis and antibiotic prescribing
- **Shingles** — early treatment with antiviral medication
- **Earache** in children
- **Minor skin conditions** — rashes, eczema flare-ups, mild infections
- **Allergies and hay fever**
- **Pain relief** — stronger over-the-counter options than supermarkets stock

To find your nearest pharmacy and its opening hours, search on the NHS website or ask 111.

## Urgent Treatment Centres (UTCs)

UTCs are open at least 12 hours a day, 7 days a week, and handle urgent conditions that need same-day attention but are not emergencies. Our [A&E vs UTC guide](/guides/ae-or-utc/) covers the full distinction. Key out-of-hours advantages of UTCs:

- Shorter waits than A&E for qualifying conditions
- X-ray capability for suspected fractures
- Wound closure (stitches, glue, strips)
- Plaster casting
- GP-level prescribing
- Assessment by experienced emergency nurse practitioners

Not all UTCs are open overnight — many close at 10 pm or midnight. Check opening hours before travelling. [Our hospital listings](/hospitals/) show whether each department is open.

## Dental emergencies

Dental problems out of hours cause significant pain but are rarely life-threatening. For an emergency dental appointment:

- Call 111, which can direct you to the nearest out-of-hours dental service
- Some areas have dedicated emergency dental clinics open weekends and evenings

A&E is generally not appropriate for dental problems unless there is significant facial swelling affecting breathing or swallowing, uncontrolled bleeding from the mouth, or facial trauma involving broken teeth with jaw injury.

## Mental health crises

Out-of-hours mental health support includes:

- **NHS 111 (press 2)** — connects to a mental health crisis line in many areas
- **Samaritans** — 116 123 (24/7, free)
- **Crisis text line** — text SHOUT to 85258
- **Your local crisis team** — the number should be on your care plan if you are known to mental health services
- **Crisis cafes and safe havens** — many areas now operate walk-in crisis support in the evenings

Our [mental health crisis guide](/guides/mental-health-crisis/) covers when A&E is appropriate and when alternatives are better.

## Eye emergencies

For sudden changes in vision, eye injuries or severe eye pain out of hours:

- Some hospitals have dedicated eye emergency departments (Eye Casualty) with their own opening hours
- A&E can assess acute eye problems, though you may wait longer than at a specialist unit
- NHS 111 can advise on the nearest appropriate service

## Conditions that can wait until morning

Not everything needs out-of-hours care. The following can generally wait for your GP surgery to open:

- A cough or cold that started in the last day or two without severe symptoms
- Mild back pain or muscle aches
- A mild rash without fever or systemic symptoms
- A repeat prescription that has run out (though ideally you should plan ahead)
- Long-standing symptoms that have not suddenly changed
- Non-urgent follow-up questions about existing conditions

If in doubt, [call 111](/guides/nhs-111-guide/) — the whole point of the service is to help you decide.

## When A&E is the right out-of-hours choice

A&E is the right destination if you have a genuine emergency — the conditions described in our [when to call 999 guide](/guides/when-to-call-999/) — or if you need resources that only an emergency department can provide: emergency surgery, CT scanning, blood transfusion, specialist trauma care, or resuscitation.

If you have decided A&E is needed, [check live wait times](/near-me/) to choose the quietest department, and time your arrival using our [busiest-times guide](/guides/busiest-times-ae/) if your condition allows. Taking five minutes to compare options can save you hours in a waiting room.

## Children out of hours

When a child is unwell outside GP hours, parents face an especially anxious decision. The key principle is the same as for adults: assess the severity, and start with [111](/guides/nhs-111-guide/) unless the situation is clearly an emergency.

Children can deteriorate faster than adults, so a lower threshold for seeking help is appropriate. But children also recover faster, and many childhood illnesses that look alarming — high fevers, vomiting, croup — can be managed safely at home with the right guidance. The 111 service has paediatric pathways specifically designed for children's symptoms. Our [children's A&E guide](/guides/children-ae-guide/) covers the red flags that warrant immediate emergency attendance.

## The cost of going to A&E for non-emergencies

This is not about blame — it is about your own time. If you attend A&E for a condition that a pharmacy, GP or UTC could handle, you will wait significantly longer than you would at the more appropriate service. A&E triages by clinical severity, so non-emergency conditions are correctly placed at the bottom of the queue. A three-hour wait for a condition that a pharmacist could have resolved in ten minutes is frustrating for you and takes up resources that the department needs for genuine emergencies.

Every alternative service described in this guide exists precisely to handle the conditions that A&E is not designed for. Using them is not second-best — it is the right route to faster, more appropriate care.

## Planning ahead

The best out-of-hours strategy starts before you need it:

- **Register with a GP** if you are not already registered — without a GP, your only routes into the system out of hours are 111, pharmacies and A&E
- **Order repeat prescriptions in good time** — running out of medication at the weekend creates avoidable stress and potential health risk
- **Know your local services** — find out where your nearest UTC, extended-hours pharmacy and out-of-hours GP hub are before you need them
- **Save 111 in your contacts** and bookmark 111.nhs.uk
- **Keep your medication list up to date** — our [what to bring guide](/guides/what-to-bring-ae/) explains why this is the single most important thing to have ready
- **Bookmark this site** — [checking live wait times](/near-me/) before you travel can save you hours, especially out of hours when department busyness varies widely

If you have a long-term condition, ask your specialist team whether they offer a direct access line for acute flare-ups — many respiratory, cardiology and diabetes teams provide helplines that bypass both 111 and A&E for patients already under their care.

## Bottom line

When the GP is closed, you have more options than just A&E. [NHS 111](/guides/nhs-111-guide/) is the best starting point — it can assess your symptoms and direct you to the right service, whether that is self-care, a pharmacy, an out-of-hours GP, a [UTC](/guides/ae-or-utc/), or A&E. Knowing these options in advance means you spend less time waiting and more time getting the care you actually need.
`,
  },
  {
    slug: "fractures-sprains-guide",
    title: "Broken Bones and Sprains: A&E or Urgent Treatment Centre?",
    description: "How to tell the difference between a fracture and a sprain, manage the injury at home, and choose the right service.",
    category: "Conditions",
    readTime: "7 min read",
    lastReviewed: "August 2026",
    content: `
## The most common A&E dilemma

You have twisted your ankle, fallen on your wrist, or jammed a finger. It hurts, it is swelling, and you are not sure whether it is broken. Do you need A&E? Will a UTC do? Can you wait and see? This guide covers the clinical signs that distinguish fractures from sprains, the first aid that helps either way, and how to choose the right service.

## Fracture vs sprain: what is the difference?

### Fracture (broken bone)

A fracture is any break or crack in a bone. Fractures range from hairline cracks (stress fractures) that are hard to see even on X-ray to complete breaks where the bone is in two or more pieces. Compound fractures — where bone breaks through the skin — are the most serious and always require A&E.

### Sprain

A sprain is damage to a ligament — the tough tissue that connects bones at a joint. Sprains are graded by severity:
- **Grade 1** — mild stretching, minor swelling, the joint is stable
- **Grade 2** — partial tear, moderate swelling and bruising, the joint is loosened
- **Grade 3** — complete tear, significant swelling and bruising, the joint is unstable

A severe grade-3 sprain can be as debilitating as a fracture and may take longer to heal.

### Strain

Often confused with sprains, strains involve damage to muscles or tendons (which connect muscles to bones) rather than ligaments. Treatment is similar to sprains.

## How to tell them apart

The honest answer is that you often cannot tell without an X-ray. However, certain signs make a fracture more likely:

**Signs suggesting fracture:**
- Visible deformity — the limb looks bent, twisted or shortened compared to the other side
- Inability to bear any weight on the injured leg, or inability to grip anything with the injured hand
- A cracking or snapping sound at the time of injury (though sprains can also produce this)
- Pain that is very localised to one spot on the bone, especially if pressing directly on the bone produces sharp pain
- Rapid, severe swelling within the first hour
- Numbness or tingling below the injury, suggesting nerve involvement
- The skin looks pale or blue below the injury, suggesting blood supply compromise
- You are over 55 — bone density decreases with age, making fractures more likely from the same mechanism

**Signs suggesting sprain:**
- Swelling is around the joint rather than along the bone
- The joint moves (painfully) through its range of motion
- You can bear some weight, even if it hurts
- Bruising develops over hours rather than immediately
- The pain is worst when you move the joint, not when you press the bone

## First aid: what to do immediately

Regardless of whether you suspect a fracture or sprain, the initial management is the same. Use PRICE:

- **P**rotect — stop using the injured area. Do not try to test whether it is broken by moving it forcefully.
- **R**est — sit or lie down, keep the injury still.
- **I**ce — apply an ice pack (or a bag of frozen peas wrapped in a tea towel) for 15–20 minutes every 2–3 hours. Do not apply ice directly to skin.
- **C**ompression — if you have a bandage, wrap the area firmly but not so tightly that it restricts blood flow. If toes or fingers go numb, pale or tingly, loosen the bandage.
- **E**levation — raise the injured area above the level of the heart if possible. For an ankle, lie down with your foot on cushions.

Take over-the-counter pain relief: paracetamol and ibuprofen can be taken together (assuming no allergies or contraindications). Ibuprofen also reduces inflammation.

**Do not:**
- Try to straighten a visibly deformed limb
- Remove shoes or boots from a swollen ankle — the swelling may make it impossible to get them back on, and the boot is providing compression and support
- Apply heat in the first 48 hours — this increases swelling
- Drink alcohol — it increases swelling and masks pain, which can lead to further injury

## Choosing the right service

### A&E is needed if:

- The limb is visibly deformed — bent at an abnormal angle, rotated, or shortened
- Bone is visible through the skin (compound fracture) — this is a medical emergency
- There is severe, uncontrolled pain that is not responding to over-the-counter painkillers
- The skin below the injury is pale, blue, numb or cold — this suggests blood supply compromise
- The injury involves the hip, pelvis, spine or skull
- The person is a young child and the mechanism was significant (fall from height, road traffic collision)
- The injury was caused by a high-energy mechanism (car crash, fall from height, crush injury)

Our guide on [when to call 999](/guides/when-to-call-999/) covers the circumstances where an ambulance is warranted.

### A UTC can handle:

- Suspected simple fractures — wrist, ankle, finger, toe, forearm — where the limb looks roughly normal
- Sprains and strains
- Dislocated fingers or toes (though not shoulders or hips)
- Minor sports injuries
- Follow-up X-rays and cast adjustments (some UTCs offer this)

UTCs have X-ray facilities, can apply plaster casts and splints, and have clinicians experienced in musculoskeletal assessment. For a qualifying injury, a UTC is almost always faster than A&E. Our [A&E vs UTC guide](/guides/ae-or-utc/) covers the full distinction.

[Check live wait times](/near-me/) to compare UTCs and A&E departments near you.

### GP or self-care is sufficient if:

- You have a mild sprain with minimal swelling that is improving with PRICE
- You can bear weight and use the limb, though it is uncomfortable
- Bruising is developing slowly and there is no deformity
- Over-the-counter pain relief is controlling the pain adequately

If in doubt, [call 111](/guides/nhs-111-guide/). The service has musculoskeletal pathways that assess whether you need imaging.

## At the hospital

Whether you attend A&E or a UTC, the process for musculoskeletal injuries follows a similar pattern:

1. **Registration and triage** — as described in our [A&E guide](/guides/what-happens-in-ae/) or the UTC equivalent
2. **Clinical assessment** — a clinician examines the injury, tests range of motion, and assesses nerve and blood supply below the injury
3. **X-ray** — if a fracture is suspected, you will be sent for imaging
4. **Diagnosis** — the clinician reviews the X-ray and tells you whether there is a fracture
5. **Treatment** — plaster cast, splint, sling, strapping, or advice on self-management depending on the injury
6. **Follow-up plan** — many fractures need a follow-up appointment at a fracture clinic within one to two weeks for review and possible re-imaging

## Recovery

### Fractures

Healing time varies by bone and severity. Wrist fractures typically take 6–8 weeks in plaster. Ankle fractures may take 6–12 weeks. During this time you may need follow-up at the fracture clinic, physiotherapy, and gradual return to activity. Your discharge paperwork should specify follow-up arrangements.

### Sprains

Grade 1 sprains often recover within 2–3 weeks. Grade 2 can take 4–8 weeks. Grade 3 sprains may take several months and sometimes require surgery. Early physiotherapy improves outcomes for moderate and severe sprains.

For both injuries, our [after discharge guide](/guides/after-ae-discharge/) covers what to expect during recovery and when to seek further help.

## Children and musculoskeletal injuries

Children's bones are still growing and have growth plates — areas of softer cartilage near the ends of bones. Injuries to growth plates need careful assessment because damage can affect future bone growth. Any child with a suspected fracture near a joint should be assessed at a service with paediatric expertise. Our [children's A&E guide](/guides/children-ae-guide/) covers this further.

## Complications to watch for

Most fractures and sprains heal without problems, but some complications are important to recognise early:

- **Compartment syndrome** — severe, increasing pain that is out of proportion to the injury, especially in a limb with a cast or tight bandage. The limb may feel tight, numb or tingly. This is a surgical emergency — attend A&E immediately if you suspect it.
- **Deep vein thrombosis (DVT)** — reduced mobility after a leg injury increases the risk of blood clots. Watch for calf swelling, warmth, redness or pain that worsens over days. Your discharge team should advise whether blood-thinning injections are needed.
- **Infection in open wounds** — if a fracture broke the skin, watch for increasing redness, swelling, warmth, discharge or fever in the days after treatment. Early antibiotics prevent serious bone infection.
- **Malunion or non-union** — bones that heal in the wrong position or fail to heal at all. Follow-up fracture clinic appointments exist to catch this early through repeat imaging.
- **Chronic instability** — severe sprains, particularly of the ankle, can leave the joint permanently looser if rehabilitation is incomplete. Physiotherapy and strengthening exercises reduce this risk significantly.

If you experience any of these warning signs, do not wait for a scheduled follow-up — attend A&E or contact your GP immediately.

## Bottom line

If the limb looks deformed, bone is visible, or blood supply below the injury seems compromised, go to A&E. For everything else — suspected simple fractures, sprains, strains and minor musculoskeletal injuries — a [UTC is faster](/guides/ae-or-utc/) and has the facilities to diagnose and treat you. Apply PRICE first aid immediately, take pain relief, and [check live wait times](/near-me/) to choose the least busy option near you.
`,
  },
  {
    slug: "burns-first-aid",
    title: "Burns and Scalds: First Aid and When to Seek Emergency Care",
    description: "Immediate first aid steps for burns, how to assess severity, and clear guidance on when a burn needs A&E.",
    category: "Conditions",
    readTime: "7 min read",
    lastReviewed: "August 2026",
    content: `
## Why burns need quick decisions

Burns are one of the most common household injuries, yet many people are unsure of the correct first aid or when a burn needs professional medical attention. Getting both right matters — proper first aid in the first 20 minutes dramatically affects healing and scarring, and choosing the right level of care ensures you get treatment without an unnecessary wait.

This guide covers first aid for all types of burns, how to assess severity, and when to head for A&E versus managing at home or visiting a UTC.

## Immediate first aid: the first 20 minutes

Regardless of the burn's cause or severity, the initial steps are the same:

### 1. Stop the burning process

- **Flames** — stop, drop and roll; smother with a blanket or coat; douse with water
- **Scalds** — remove the person from the source. Carefully remove wet clothing unless it is stuck to the skin.
- **Chemical burns** — remove contaminated clothing (wearing gloves if available) and irrigate with running water for at least 20 minutes. Do not attempt to neutralise the chemical.
- **Electrical burns** — ensure the electrical source is disconnected before touching the person. Call 999 — electrical burns often cause internal injuries not visible on the surface.

### 2. Cool the burn

Run **cool (not cold) running water** over the burn for **at least 20 minutes**. This is the single most effective first aid intervention. The water should be comfortable to the touch — roughly 15°C. Do not use ice, iced water, or frozen peas directly on the burn, as these can cause further tissue damage by cooling the skin too rapidly.

Twenty minutes is the minimum — longer is better, particularly for larger burns. Cooling can be effective up to three hours after the burn occurred, so it is never too late to start.

### 3. Remove jewellery and clothing

While cooling, gently remove rings, watches, bracelets and clothing from the burned area — swelling develops rapidly and can make removal impossible later. Do not remove anything that is stuck to the burn.

### 4. Cover the burn

After cooling, cover the burn with cling film (laid along the burn, not wrapped tightly around a limb) or a clean, non-fluffy material. Cling film is ideal because it is sterile from the roll, transparent (so clinicians can see the burn without removing the covering), and does not stick to the wound.

**Do not apply:**
- Butter, oil, toothpaste or any home remedy — these trap heat and introduce infection
- Adhesive dressings or plasters — they will stick to the wound
- Fluffy materials like cotton wool — fibres embed in the wound

### 5. Manage pain

Burns are extremely painful. Give age-appropriate paracetamol and ibuprofen. For children, use the correct dose for their weight and age. Our [children's guide](/guides/children-ae-guide/) covers paediatric medication dosing.

## Assessing burn severity

Burns are classified by depth and area:

### Depth

**Superficial (first-degree):** Only the outer layer of skin (epidermis) is affected. The skin is red, painful and may swell slightly. Sunburn is a typical example. These burns heal within a week without scarring.

**Partial-thickness (second-degree):** The epidermis and part of the underlying dermis are damaged. The skin is red, blistered, very painful and weeping. These burns take 2–4 weeks to heal and may scar.

**Full-thickness (third-degree):** The entire thickness of the skin is destroyed. The burn may look white, brown, black or leathery. Paradoxically, full-thickness burns may be less painful than partial-thickness burns because the nerve endings have been destroyed. These burns always require specialist treatment and often need skin grafting.

### Area

Burn area is estimated as a percentage of the body surface. A rough guide: the palm of the patient's hand (including fingers) represents approximately 1 per cent of their body surface area. Burns covering more than 1 per cent in a child or 3 per cent in an adult generally need hospital assessment.

## When to call 999

Call 999 for:

- Burns affecting the airway — the person was in a fire or explosion, has singed nasal hair, a hoarse voice, facial burns, or difficulty breathing
- Electrical burns — even if the skin burn looks minor, internal injuries may be serious
- Chemical burns to the eyes
- Burns covering a large area (more than 5 per cent of body surface area, or any full-thickness burn)
- The person is in shock — pale, cold, sweaty, confused or drowsy
- Burns in combination with other injuries (explosion, fall, road traffic collision)

Our guide on [when to call 999](/guides/when-to-call-999/) covers emergency decision-making in general.

## When to go to A&E

Go to A&E (but a 999 ambulance is not usually needed) for:

- **Any burn to the face, hands, feet, genitals or major joints** — these areas need specialist assessment because of the risk of functional impairment and scarring
- **Full-thickness burns** of any size
- **Circumferential burns** — burns that go all the way around a limb, finger or toe — these can restrict blood supply as swelling develops
- **Burns in babies under 12 months** regardless of size
- **Partial-thickness burns** larger than the patient's palm
- **Chemical burns** (after 20 minutes of irrigation)
- **Any burn you are unsure about** — it is better to have a burn assessed and be told it is minor than to undertreate one that turns out to be serious

[Check live A&E wait times](/near-me/) before travelling to choose the least busy department.

## When a UTC or self-care is sufficient

A [UTC or minor injuries unit](/guides/ae-or-utc/) can assess and dress:

- Small superficial burns not on the face, hands, feet or genitals
- Small partial-thickness burns (smaller than the patient's palm) in adults, not on sensitive areas
- Minor scalds from hot drinks or cooking

Self-care at home is appropriate for:

- Sunburn without blistering
- Very small superficial burns (smaller than a 10p coin) not on sensitive areas
- Burns that are healing well after initial treatment

## Treatment at hospital

At A&E or a specialist burns unit, treatment may include:

- Cleaning the burn under anaesthesia or pain relief
- Debridement — removing dead tissue
- Specialist dressings — silver-containing dressings, hydrocolloid dressings, or biological dressings
- Blistering management — whether to leave blisters intact or drain them (clinical opinion varies)
- Tetanus booster — if your tetanus vaccination is not up to date
- Antibiotic prophylaxis — for burns at high risk of infection
- Referral to a specialist burns unit — for complex burns requiring ongoing specialist care
- Skin grafting — for deep burns that will not heal on their own

## Burns in children

Children's skin is thinner than adults', which means the same heat source causes a deeper burn. Scalds from hot drinks are the most common burn in children under five — a mug of tea or coffee is hot enough to scald a child 15 minutes after it was poured.

Any burn in a child under 12 months should be assessed at A&E regardless of apparent severity. For older children, apply the same first aid and severity assessment as adults, but with a lower threshold for seeking professional help. When in doubt, [call 111](/guides/nhs-111-guide/) for advice.

Our [children's A&E guide](/guides/children-ae-guide/) covers paediatric emergency attendance in general.

## Common mistakes

- **Not cooling for long enough.** Twenty minutes feels like a long time when someone is in pain, but cutting it short significantly worsens the injury. Set a timer.
- **Using ice or frozen items.** Ice causes vasoconstriction and can convert a superficial burn into a deeper one.
- **Applying butter, oil or cream.** These trap heat and increase infection risk.
- **Popping blisters at home.** Blisters are a natural protective barrier. Popping them at home introduces infection risk. Let a clinician decide whether drainage is appropriate.
- **Removing stuck clothing.** If clothing is stuck to the burn, leave it for clinicians to manage. Pulling it off tears the damaged skin.
- **Underestimating scald injuries.** Scalds look less dramatic than flame burns but can be just as deep. Hot cooking oil and steam cause particularly deep scalds.

## After treatment

Follow-up care for burns includes:

- Regular dressing changes — you may be taught to do these at home or asked to attend a practice nurse or burns clinic
- Scar management — moisturising, sun protection, and sometimes pressure garments or silicone sheets
- Physiotherapy — for burns affecting joints, to maintain range of motion
- Psychological support — burns, especially visible ones, can cause significant emotional distress

Our [after discharge guide](/guides/after-ae-discharge/) covers general post-A&E recovery and follow-up.

## Bottom line

Cool the burn with running water for 20 minutes — this is the most important thing you can do. Cover with cling film. Give pain relief. Then decide: small superficial burns can be managed at home or at a [UTC](/guides/ae-or-utc/); burns to the face, hands, feet, genitals or joints, all full-thickness burns, large partial-thickness burns, and all burns in babies need [A&E](/near-me/). When in doubt, err on the side of caution and have it assessed.
`,
  },
  {
    slug: "head-injury-guide",
    title: "Head Injuries: Warning Signs and When A&E Is Essential",
    description: "How to assess a head injury, which red flags demand immediate emergency care, and when it is safe to manage at home.",
    category: "Conditions",
    readTime: "7 min read",
    lastReviewed: "August 2026",
    content: `
## Why head injuries are different

Head injuries range from minor bumps that need nothing more than rest to life-threatening bleeds inside the skull that require emergency surgery. The challenge is that serious head injuries do not always look dramatic at first — a person can walk and talk after a significant blow and then deteriorate hours later. This guide explains the warning signs, when to go straight to A&E, when to call 999, and when it is safe to manage at home.

## Types of head injury

### Concussion

A concussion is a temporary disturbance of brain function caused by a blow, jolt or shake. The person may feel dazed, confused, have a headache, feel sick, have blurred vision or have trouble remembering what happened. Most concussions resolve within days to weeks, but they need proper monitoring.

### Scalp wound

The scalp has a rich blood supply, so even small cuts can bleed heavily. A bleeding scalp wound looks alarming but is usually not dangerous in itself. Apply firm pressure with a clean cloth for at least 10 minutes. The wound may need stitches or glue — a [UTC](/guides/ae-or-utc/) can handle this.

### Skull fracture

A crack in the skull bone. Signs include swelling or a dent over the injury site, bruising around the eyes or behind the ears (may develop hours later), and clear fluid leaking from the nose or ears. Skull fractures need A&E assessment.

### Intracranial haemorrhage

Bleeding inside the skull, either on the surface of the brain (subdural or extradural haematoma) or within the brain tissue itself. This is the most dangerous consequence of a head injury. It can develop rapidly (extradural) or slowly over days to weeks (subdural). Older adults and people taking blood-thinning medication are at particularly high risk of subdural haematomas — see our [elderly A&E guide](/guides/elderly-ae-guide/).

## When to call 999

Call 999 immediately if the person:

- Was knocked unconscious, even briefly
- Is not fully alert — confused, drowsy, difficult to wake, or not responding normally
- Is having a seizure (fit)
- Has clear fluid or blood leaking from the nose or ear
- Has a visible skull deformity or a large, boggy swelling
- Has weakness or numbness in an arm or leg
- Has difficulty speaking or understanding speech
- Has had more than one episode of vomiting since the injury
- Was injured by a high-energy mechanism: road traffic collision, fall from height (more than twice their own height), being hit by a thrown or swung object at speed

While waiting for the ambulance, if the person is unconscious but breathing, place them in the recovery position. Do not move them if you suspect a spinal injury (neck or back pain, tingling in limbs, mechanism suggesting spinal damage).

## When to go to A&E

Go to A&E (an ambulance is not usually needed, but do not let the person drive) if:

- The person lost consciousness at any point, even momentarily
- They cannot remember what happened (amnesia for the event or the period before it)
- They have a persistent headache that is not improving with paracetamol
- They have vomited once since the injury
- They are on blood-thinning medication (warfarin, apixaban, rivarelbanan, clopidogrel, aspirin) — even a minor head injury carries significant risk when anticoagulated
- They are over 65 — lower threshold for serious injury
- They have had previous brain surgery or a known condition that increases bleeding risk
- The mechanism was significant — a fall from standing height onto a hard surface in an older adult, or any blow to the head involving a weapon or impact at speed
- The injury is in a baby or young child — our [children's guide](/guides/children-ae-guide/) covers additional red flags

[Check live A&E wait times](/near-me/) to choose the quickest department, but do not delay attending if the person has any of the above signs.

## When it is safe to stay at home

A head injury can be managed at home if all of the following are true:

- The person did not lose consciousness at any point
- They can remember the injury clearly
- They are fully alert, oriented and behaving normally
- They have, at most, a mild headache that improves with paracetamol
- They have not vomited
- They are not on blood-thinning medication
- The mechanism was minor — a bump against a cupboard, a minor slip without significant impact

### Home monitoring — the next 24 hours

Even with a minor head injury, monitor the person for the next 24 hours. Wake them every 2–3 hours overnight to check they are responsive and orientated. Go to A&E if any of the following develop:

- Increasing drowsiness or difficulty waking
- Confusion or unusual behaviour
- Severe or worsening headache
- Vomiting
- Seizure
- Weakness in an arm or leg
- Vision changes — double vision, blurred vision
- Clear fluid from nose or ear
- Difficulty speaking or understanding speech
- Unusual irritability (especially in children)

## Head injuries in children

Children bump their heads constantly — it is a normal part of childhood. Most head bumps in children are minor and need nothing more than a cuddle, an ice pack and observation. However, children under one year are at higher risk because their skulls are thinner and they cannot tell you how they feel.

**Take a child to A&E if:**
- They were knocked unconscious, even briefly
- They are drowsy, difficult to wake, or not feeding normally (babies)
- They have vomited more than once
- They have a large, boggy swelling on the head (not just a bump)
- They are inconsolable and not responding to normal comforting
- The fall was from more than their own height onto a hard surface
- They are under 12 months with any head injury beyond a very minor bump

For more on children and A&E, see our [parent's guide](/guides/children-ae-guide/).

## Head injuries in older adults

Older adults are at significantly higher risk from head injuries because:

- Blood-thinning medication is more common — and dramatically increases bleeding risk inside the skull
- Subdural haematomas can develop slowly over days to weeks — a minor bump today can cause progressive confusion and weakness two weeks later
- Falls are more frequent and recovery is slower
- Communication of symptoms may be complicated by existing cognitive impairment

Any older adult on blood thinners who has a head injury should attend A&E, regardless of how minor the impact seems. Our [elderly A&E guide](/guides/elderly-ae-guide/) covers additional considerations.

## At the hospital

If you attend A&E with a head injury, the process typically follows these steps:

1. [Triage](/guides/triage-explained/) — assessment of consciousness level, vital signs and mechanism of injury
2. Clinical assessment — neurological examination including pupil response, limb strength, coordination and cognitive function
3. CT scan — if clinical criteria are met (loss of consciousness, amnesia, vomiting, anticoagulation, high-mechanism injury, abnormal neurological findings)
4. Observation — if the CT is normal, you may be observed for a period before discharge
5. Admission — if the CT shows a bleed or fracture, you will be admitted, potentially to a neurosurgical unit

## Recovery from concussion

Most concussions resolve within 7–10 days. During recovery:

- Rest from physical activity for at least 48 hours
- Avoid screens if they worsen headache
- Do not return to contact sports until fully recovered — a second concussion before the first has healed is extremely dangerous
- Avoid alcohol
- Paracetamol for headache (avoid ibuprofen in the first 24 hours as it can increase bleeding risk)
- Gradually return to normal activities as symptoms allow

If symptoms persist beyond two weeks, see your GP for a post-concussion assessment.

## Supporting someone with a head injury at home

If A&E discharges the patient with a head-injury observation sheet, take it seriously. For the first 24 hours, someone should stay with the injured person and check on them regularly — including waking them every two to three hours during the night to confirm they respond normally. Keep the environment calm and quiet, avoid alcohol, and do not give sedating medication unless prescribed. Make sure the injured person avoids driving, operating machinery or making important decisions for at least 48 hours after the injury, as judgment and reaction times may be impaired even when the person feels fine.

Children with head injuries need especially close monitoring because they may not be able to describe symptoms like blurred vision, dizziness or nausea. Watch for changes in behaviour — unusual irritability, drowsiness, loss of interest in food or play — and return to A&E immediately if anything concerns you. Our [children's A&E guide](/guides/children-ae-guide/) covers paediatric red flags in more detail.

## Bottom line

Head injuries need careful assessment because serious complications can develop hours after an apparently minor bump. When in doubt, attend [A&E](/near-me/) — particularly if the person lost consciousness, cannot remember the injury, is on blood thinners, or is very young or elderly. For clearly minor bumps with no red flags, monitor at home for 24 hours and attend immediately if symptoms develop. Our [when to call 999 guide](/guides/when-to-call-999/) covers the situations where an ambulance is essential.
`,
  },
  {
    slug: "chest-pain-guide",
    title: "Chest Pain: What to Do and Where to Go",
    description: "Not all chest pain is a heart attack — but knowing the difference could save your life. A guide to causes, red flags and the right response.",
    category: "Conditions",
    readTime: "7 min read",
    lastReviewed: "August 2026",
    content: `
## Chest pain is always worth taking seriously

Chest pain is the number one reason people call 999 in the UK, and rightly so — it can signal a heart attack, where minutes matter. But chest pain has dozens of causes, ranging from life-threatening cardiac events to harmless muscle strain. The challenge is telling them apart, and the stakes for getting it wrong are high.

This guide is not a substitute for medical assessment. If you have chest pain right now and are worried it could be your heart, **stop reading and call 999**. If your chest pain has settled and you want to understand what might have caused it and when to seek help, read on.

## When to call 999 immediately

Call 999 without delay if you have:

- **Central chest pain** that feels like pressure, squeezing, tightness or heaviness — as though something is sitting on your chest
- **Pain that radiates** to the left arm, jaw, neck, back or stomach
- **Chest pain with breathlessness** — struggling to get air in, even at rest
- **Chest pain with sweating** — cold, clammy sweat, not related to exercise or heat
- **Chest pain with nausea or vomiting**
- **Chest pain with dizziness, light-headedness or feeling like you might pass out**
- **Chest pain with a racing, irregular or pounding heartbeat**
- **A feeling of impending doom** — this sounds vague but is a recognised symptom of heart attack

While waiting for the ambulance:
- Sit down in a comfortable position, leaning slightly forward
- Chew a 300 mg aspirin tablet if you have one and are not allergic — chewing gets it into the bloodstream faster than swallowing whole
- If you have a GTN (glyceryl trinitrate) spray prescribed for angina, use it as directed
- Do not walk around or exert yourself
- Unlock the front door so paramedics can get in

Our general guide on [when to call 999](/guides/when-to-call-999/) covers emergency decision-making across all conditions.

## Heart attack — what is actually happening

A heart attack (myocardial infarction) occurs when a blood clot blocks one of the coronary arteries — the blood vessels that supply the heart muscle itself with oxygen. Without blood supply, the affected heart muscle begins to die. The faster blood flow is restored — through clot-busting drugs or emergency surgery to open the artery — the more muscle is saved.

This is why time matters. "Time is muscle" is the phrase cardiologists use. Every minute of delay increases the amount of permanent heart damage.

### Heart attack symptoms in women

Women are more likely than men to have atypical heart attack symptoms:
- Pain in the back, jaw or arm without typical central chest pain
- Nausea, indigestion-like symptoms or stomach pain
- Breathlessness without chest pain
- Unusual fatigue for days before the event
- Dizziness or light-headedness

These atypical presentations mean heart attacks in women are more often missed or dismissed. If you are a woman with any combination of these symptoms, do not wait — call 999.

## Other serious causes of chest pain

### Pulmonary embolism (blood clot in the lung)

Sharp chest pain that worsens when you breathe in, often accompanied by breathlessness and rapid heart rate. Risk factors include recent surgery, long flights or car journeys, cancer, pregnancy, and being on the contraceptive pill. This is a 999-level emergency.

### Aortic dissection

Sudden, severe, tearing pain in the chest or between the shoulder blades. Extremely serious and requires immediate emergency care. Call 999.

### Pneumothorax (collapsed lung)

Sudden sharp chest pain on one side with breathlessness. More common in tall, thin young men and in people with lung disease. Needs A&E assessment.

### Pericarditis

Inflammation of the sac around the heart. Causes sharp chest pain that worsens when lying flat and improves when leaning forward. Often follows a viral infection. Needs medical assessment but is not usually immediately life-threatening.

## Less serious causes of chest pain

Many causes of chest pain are uncomfortable but not dangerous:

### Musculoskeletal pain

The most common cause of chest pain in younger adults. Muscle strain from exercise, heavy lifting or awkward movements causes pain that worsens with movement, deep breathing or pressing on the chest wall. It does not radiate to the arm or jaw and is not associated with breathlessness or sweating. Rest, over-the-counter painkillers and gentle stretching usually resolve it within a few days.

### Gastro-oesophageal reflux (heartburn)

Acid from the stomach rising into the oesophagus causes a burning sensation behind the breastbone. It often worsens after eating, when lying down, or when bending over. Antacids provide quick relief. Reflux pain can mimic cardiac pain, and even experienced clinicians sometimes cannot tell them apart without tests — which is why chest pain should always be assessed if there is any doubt.

### Anxiety and panic attacks

Panic attacks commonly cause chest tightness, rapid breathing, pounding heart and a feeling that something terrible is happening. The physical sensations are real and can be genuinely frightening. If you have recurrent panic attacks with chest pain, it is still worth having a one-off cardiac assessment to rule out a physical cause, after which you can be confident that future episodes are anxiety-related.

Our [mental health crisis guide](/guides/mental-health-crisis/) covers panic attacks and anxiety in the context of A&E attendance.

### Costochondritis

Inflammation of the cartilage connecting the ribs to the breastbone. Causes localised chest pain that worsens with pressing on the affected area, deep breathing or twisting. It resolves on its own over weeks with anti-inflammatory medication.

## Making the decision

If you are unsure whether your chest pain is serious, ask yourself these questions:

1. **Is the pain central, crushing or pressure-like?** → Call 999
2. **Does it spread to the arm, jaw, neck or back?** → Call 999
3. **Is it accompanied by breathlessness, sweating, nausea or dizziness?** → Call 999
4. **Did it come on suddenly and severely?** → Call 999
5. **Is it sharp, localised, and worse when you press on it or move?** → Likely musculoskeletal. Try painkillers and rest. See your GP if it persists.
6. **Is it a burning sensation related to eating?** → Likely reflux. Try antacids. See your GP if it recurs.
7. **Are you also feeling panicky, tingling in your hands, and breathing fast?** → Likely anxiety. Try slow breathing. But if this is the first time, get checked.

**When in doubt, call 999.** No paramedic will criticise you for calling with chest pain that turns out to be muscular. The alternative — ignoring cardiac symptoms — is far more dangerous.

## What happens at A&E for chest pain

If you arrive at A&E with chest pain — whether by ambulance or self-presenting — you will be triaged as high priority. The standard workup includes:

1. **ECG (electrocardiogram)** — a tracing of your heart's electrical activity, done within minutes of arrival. It can immediately show whether you are having a heart attack.
2. **Blood tests** — including troponin, a protein released when heart muscle is damaged. Initial results take about an hour; a second troponin is often taken 3–6 hours later.
3. **Chest X-ray** — to check for lung problems
4. **Clinical assessment** — history, examination, medication review
5. **Monitoring** — continuous heart rhythm monitoring while results are awaited

For the full process, see our [A&E walkthrough](/guides/what-happens-in-ae/). Our [what to bring guide](/guides/what-to-bring-ae/) covers what to have with you — your medication list is particularly important for chest pain presentations.

## After the visit

If cardiac causes are ruled out, your discharge advice will depend on the suspected diagnosis. Our [after discharge guide](/guides/after-ae-discharge/) covers general follow-up. For musculoskeletal and reflux-related chest pain, your GP can manage ongoing treatment. For anxiety-related chest pain, ask about talking therapies and panic management strategies.

If a cardiac cause is found, your treatment will be more intensive — potentially including emergency procedures, medication changes, cardiac rehabilitation and lifestyle modification. The cardiology team will manage this pathway.

## Preventing future episodes

Once a cardiac event has been ruled out, understanding your risk factors helps prevent future scares and genuine problems. The main modifiable risk factors for heart disease are smoking, high blood pressure, high cholesterol, diabetes, obesity and physical inactivity. Your GP can arrange a cardiovascular risk assessment — an NHS Health Check is free for adults aged 40–74. For non-cardiac chest pain, identifying triggers is equally important: reflux responds to dietary changes and medication timing; musculoskeletal pain responds to posture correction and physiotherapy; and anxiety-related chest pain responds to cognitive behavioural therapy and breathing techniques.

## Bottom line

Chest pain is a symptom, not a diagnosis. Some causes are life-threatening and time-sensitive; others are benign. You cannot reliably tell the difference yourself, which is why the rule is simple: **if you think it could be your heart, call 999.** Fast treatment saves lives. For chest pain that is clearly muscular, reflux-related or associated with anxiety, manage at home and see your GP. [Live A&E wait times](/hospitals/) are useful context, but for chest pain, speed of arrival matters more than queue length — call 999 and let the paramedics decide.
`,
  },
  {
    slug: "after-ae-discharge",
    title: "After Leaving A&E: Recovery, Follow-Up and What to Watch For",
    description: "What to do in the hours and days after an A&E visit — medications, follow-up appointments, warning signs, and when to go back.",
    category: "Patient Tips",
    readTime: "7 min read",
    lastReviewed: "August 2026",
    content: `
## The visit does not end at the door

Leaving A&E can feel like a relief, but the period immediately after discharge is when complications can surface, medications need managing, and follow-up care needs arranging. Many patients are discharged late at night after hours of waiting, tired and stressed, and important discharge instructions can be lost in the fog.

This guide covers what to do in the hours and days after leaving A&E to ensure your recovery goes smoothly and you do not miss anything important.

## Understanding your discharge information

Before you leave A&E, you should receive — either verbally or on paper — the following information:

### Diagnosis or working diagnosis

What the clinicians think is wrong, or a list of what they have ruled out if the diagnosis is not yet clear. "We have ruled out a heart attack — the pain is likely musculoskeletal" is a valid discharge diagnosis. If you leave without understanding what the assessment concluded, ask before you go.

### Medications

Any new medications prescribed, including:
- What they are for
- How to take them (dose, frequency, with or without food)
- How long to take them
- Common side effects to be aware of
- Whether they interact with anything you already take

If you were given a prescription to fill, find out whether you need to collect it from the hospital pharmacy (which may have limited hours) or whether your local pharmacy can dispense it. If the hospital pharmacy is closed, ask whether the medication is urgent enough that you need to find a 24-hour pharmacy tonight.

### Safety-net advice

This is the most critical part of your discharge information. It tells you what symptoms should prompt a return to A&E or a call to your GP. Examples:

- "Return immediately if you develop chest pain, breathlessness or calf swelling"
- "Come back if the headache gets worse, you vomit, or you become drowsy"
- "See your GP within 48 hours if the pain does not improve"

Write these down or ask for them on paper. In the stress and tiredness of discharge, verbal safety-net advice is frequently forgotten.

### Follow-up arrangements

Many A&E visits generate follow-up actions:

- **Fracture clinic** — typically within 5–7 days for musculoskeletal injuries. The appointment is usually booked before you leave, or you receive instructions to call a number to arrange it. Our [fractures guide](/guides/fractures-sprains-guide/) covers what to expect at the fracture clinic.
- **GP review** — you may be asked to see your GP within a specific timeframe for blood results, medication review, sick notes, or ongoing management.
- **Outpatient clinic** — referrals to specialists (cardiology, neurology, surgery) are sometimes arranged from A&E. You should receive an appointment by post or phone within a few weeks.
- **District nurse** — for wound care, dressing changes, or injections at home.
- **Crisis team** — for mental health presentations, the crisis team should contact you within 24 hours. If they do not, chase this up — see our [mental health crisis guide](/guides/mental-health-crisis/).

## The first 24 hours

### Rest

Your body has been through a stressful experience — the injury or illness that brought you to A&E, hours in a clinical environment, possibly investigations and treatment. Rest is not optional. Cancel work or social commitments for at least the next day.

### Hydration and nutrition

Many patients eat and drink poorly during their A&E visit. Rehydrate and eat a proper meal as soon as you get home, unless you have been given nil-by-mouth instructions. If you are on new medications, eating helps reduce stomach irritation.

### Pain management

If you were given pain relief in A&E, find out when you can take your next dose at home. Over-treatment and under-treatment are both risks:
- Do not double up on paracetamol — the maximum adult dose is 4 g per day (eight 500 mg tablets), and liver damage from accidental overdose is more common than most people realise
- Do not take ibuprofen if you were told to avoid anti-inflammatories (certain head injuries, certain stomach conditions, some post-operative instructions)
- If you were given codeine or another opioid, be aware of drowsiness and constipation

### Monitoring

Follow the safety-net advice you were given. Set alarms to check in with yourself (or the patient, if you are a carer) at regular intervals. For head injuries, this means waking the person every 2–3 hours overnight — see our [head injury guide](/guides/head-injury-guide/).

## The first week

### Contact your GP

Even if no specific GP follow-up was requested, it is good practice to contact your GP surgery within a few days to let them know you attended A&E. The hospital sends a discharge summary to your GP, but this can take several days to arrive and process. A phone call or message through the patient portal ensures your GP knows about:

- Any new diagnoses
- Any new medications
- Any pending investigations or referrals
- Any changes to your existing medications

This is particularly important if you were started on antibiotics, blood thinners, or psychiatric medication, or if your existing medications were stopped or changed.

### Wound care

If you had a wound closed (stitches, glue, strips):
- Keep it clean and dry for the first 48 hours (unless told otherwise)
- Do not pick at stitches or glue
- Watch for signs of infection: increasing redness spreading from the wound, swelling, warmth, pus, increasing pain, fever
- Stitches are usually removed after 5–14 days depending on location — you should have been told when and where (GP practice nurse, or return to A&E/UTC)

### Sick notes

If you need a sick note (fit note) for your employer, A&E can issue one for the day of your visit. For ongoing time off, you will need to see your GP, who can issue fit notes for longer periods.

## When to return to A&E

Go back to A&E if:

- Any of the safety-net symptoms you were told about develop
- Your condition is getting worse rather than better
- You develop a new, concerning symptom related to the original problem
- You have a reaction to a new medication (severe rash, breathing difficulty, significant swelling)
- You are unable to keep down oral medications (vomiting within an hour of taking them repeatedly)

You do not need a referral or permission to return to A&E. If something feels wrong, it is always better to be reassessed than to wait and hope for the better.

## When to see your GP instead

See your GP rather than returning to A&E for:

- Questions about your diagnosis or treatment that are not urgent
- Medication side effects that are uncomfortable but not dangerous
- Ongoing pain management
- Sick notes after the first day
- Mental health follow-up that is not a crisis
- Test results that were pending at discharge (the GP receives these)
- Referrals to specialists that were not arranged in A&E

## Accessing your records

You have the right to see your A&E records, including clinical notes, test results and discharge information. This is covered under data protection law. Make a Subject Access Request to the hospital's medical records department. Our [patient rights guide](/guides/ae-patient-rights/) explains this in detail.

Having your records is useful for:
- Understanding exactly what tests were done and what the results showed
- Providing accurate information to specialists at follow-up appointments
- Insurance claims or personal injury processes
- Peace of mind — understanding what happened during a stressful and sometimes confusing experience

## Emotional recovery

An A&E visit can be emotionally as well as physically draining. It is normal to feel anxious, tearful, irritable or exhausted in the days afterwards. If you witnessed distressing scenes in the department, or if your own experience was frightening, these feelings may be more intense. Talk to someone you trust about how you are feeling.

If emotional distress persists beyond a couple of weeks, or if it is interfering with daily life, speak to your GP about support. This is not weakness — it is a normal response to a stressful experience.

## When to return to A&E

The most important reason to return is if a safety-net symptom appears — one that your discharge advice specifically told you to watch for. Other reasons to go back include worsening pain that is not controlled by your prescribed medication, a wound that becomes red, swollen, hot or starts leaking fluid, a high temperature that develops after your visit, or any symptom that feels significantly different from what you were told to expect. Do not worry about being seen as a time-waster — clinicians would far rather reassess you than have you deteriorate at home.

## Bottom line

The critical actions after leaving A&E are: understand your discharge advice, especially the safety-net symptoms; take prescribed medications correctly; attend all follow-up appointments; and contact your GP within a few days. If something feels wrong, [go back to A&E](/near-me/) — no one will judge you for returning. Check [live wait times](/hospitals/) to choose the quietest department if your return is not immediately urgent. For ongoing care questions, your GP is your best point of contact.
`,
  },
  {
    slug: "ae-complaints-pals",
    title: "How to Give Feedback or Make a Complaint About A&E Care",
    description: "A step-by-step guide to the NHS complaints process, from informal concerns to the Parliamentary Ombudsman.",
    category: "Patient Rights",
    readTime: "7 min read",
    lastReviewed: "August 2026",
    content: `
## Your feedback matters

Whether your experience in A&E was excellent, mixed or poor, the NHS wants to hear about it. Positive feedback reinforces good practice and boosts staff morale. Constructive criticism identifies problems and drives improvement. Formal complaints trigger investigations that can prevent the same thing happening to someone else.

Many people feel reluctant to complain about NHS care — they worry about being labelled a troublemaker, about affecting their future treatment, or about adding to the burden on already-stretched staff. But the NHS Constitution explicitly guarantees your right to complain without any impact on your care, and the complaints system exists precisely because the NHS recognises that it does not always get things right.

This guide covers every route for feedback, from an informal word to a formal investigation by the Parliamentary Ombudsman.

## During your visit — raising concerns in real time

The most effective time to address a concern is while you are still in the department. Problems are freshest, staff are present, and many issues can be resolved immediately.

### Speak to your clinician

If your concern is about your own treatment — you disagree with a decision, feel your pain is not being managed, or want a different approach — raise it directly with the treating clinician. You can:

- Ask for an explanation of why a particular decision was made
- Request a second opinion from a colleague
- Decline a treatment and ask about alternatives (see our [patient rights guide](/guides/ae-patient-rights/))

### Speak to the nurse in charge

If your concern is about the department rather than your individual treatment — long waits without updates, cleanliness, noise, staff behaviour, or another patient's distress — ask to speak to the nurse in charge (sometimes called the senior nurse, charge nurse, or shift coordinator). They have the authority to address operational issues and can escalate clinical concerns.

### Ask for PALS

Most hospitals have a Patient Advice and Liaison Service (PALS) office on site. During working hours, you can visit in person. PALS staff are trained to listen, investigate and resolve concerns informally. They are not part of the clinical team, which gives them an independent perspective.

## After your visit — informal feedback

### The Friends and Family Test

Most hospitals will text or email you a survey after your visit, asking whether you would recommend the service. This is the NHS Friends and Family Test. It is a quick way to register satisfaction or dissatisfaction, and the aggregated results are published and used by hospital management to track performance. However, it is not a complaints mechanism — it does not trigger an investigation or a personalised response.

### Direct contact with PALS

If your concern is significant but you do not want to make a formal complaint, contact PALS by phone, email or letter. PALS can:

- Acknowledge your experience and apologise on behalf of the trust
- Investigate what happened by speaking to staff and reviewing records
- Provide an explanation for decisions or delays
- Arrange a meeting with a senior clinician if you want to discuss your care in more detail
- Suggest changes to prevent the same issue recurring

PALS aims to resolve concerns quickly and informally. Many people find this route satisfactory and go no further. There is no time limit for contacting PALS, but earlier is better — staff recollections and records are clearest soon after the event.

## Formal complaints

If PALS cannot resolve your concern, or if the issue is serious enough to warrant a formal investigation, you can make a formal complaint.

### Who can complain?

You can complain about your own care. You can also complain on behalf of someone else — a child, a deceased relative, a person who lacks capacity — if you are acting with their consent or in their best interests. Advocacy services can help you draft and submit a complaint if you need support.

### Time limits

The NHS complaints procedure requires that complaints are made **within 12 months** of the event, or within 12 months of becoming aware of the issue. Trusts have discretion to extend this if there are good reasons for the delay.

### How to complain

Write to the hospital's complaints department. Your letter or email should include:

- Your full name, date of birth and contact details
- The date and time of your A&E visit
- The department and hospital
- A clear, factual description of what happened — chronological order is most effective
- What you want as an outcome — an apology, an explanation, reassurance that changes have been made, or a specific remedy

You do not need to use legal language or prove negligence. A clear, honest account of your experience is sufficient.

### What happens next

- The trust must **acknowledge** your complaint within **three working days**
- They will investigate by reviewing clinical records, interviewing staff, and gathering evidence
- They must provide a **written response** within a timeframe agreed with you (typically 25–60 working days depending on complexity)
- The response should address each point you raised, explain what happened, acknowledge any failures, and describe any actions being taken

### If you are not satisfied with the response

If the trust's response does not resolve your complaint, you can:

- Ask for a **local resolution meeting** — a face-to-face meeting with senior staff to discuss the findings
- Escalate to the **Parliamentary and Health Service Ombudsman (PHSO)** — the independent body that reviews NHS complaints in England. The Ombudsman can investigate further and make binding recommendations. In Scotland, the equivalent is the Scottish Public Services Ombudsman; in Wales, the Public Services Ombudsman for Wales; in Northern Ireland, the Northern Ireland Public Services Ombudsman.

### Legal action

Formal complaints and legal claims are separate processes. Making a complaint does not prevent you from pursuing legal action, and pursuing legal action does not prevent you from complaining. If you believe you have suffered harm as a result of negligent care, consult a solicitor who specialises in clinical negligence. Many offer free initial consultations.

## What complaints cannot do

The complaints process can deliver explanations, apologies, policy changes and occasionally financial remedies. It cannot:

- Discipline individual staff members (this is a separate HR process)
- Change a clinical outcome that has already occurred
- Guarantee that the same thing will never happen again (though it can reduce the likelihood)
- Provide compensation equivalent to a legal settlement

## Tips for effective feedback

### Be specific

"The care was terrible" is hard to investigate. "At 11:30 pm on 15 March, I asked for pain relief and was told I would have to wait. No one returned for over two hours, during which my pain escalated" is actionable.

### Separate emotion from facts

It is entirely valid to feel angry, upset or let down. Acknowledge those feelings, but lead with the facts. A factual, chronological account is more effective than an emotional one — not because emotions do not matter, but because investigators need specifics to identify what went wrong.

### State what you want

Be explicit about the outcome you are seeking. "I want to understand why my mother was left on a trolley for eight hours" is a clear ask. "I want something done about this" is not.

### Keep copies of everything

Save copies of your complaint letter, the trust's response, any correspondence, and your A&E records (which you can request — see our [patient rights guide](/guides/ae-patient-rights/)).

## Positive feedback

If your experience was good, the NHS wants to hear that too. Positive feedback can be given through:

- The Friends and Family Test
- A thank-you card or email to the department
- Naming individual staff members who provided exceptional care
- The trust's social media channels
- NHS Choices (the review section of the NHS website)

Staff in A&E work under extraordinary pressure, and a genuine thank-you from a patient can make a significant difference to morale.

## Learning from complaints — how the system improves

NHS trusts are required to analyse complaint themes and demonstrate how they have changed practice in response. When you make a complaint, you are contributing to system improvement, not just seeking personal redress. Serious incidents trigger formal Root Cause Analysis investigations, and the findings feed into departmental training, staffing changes, protocol updates and equipment procurement. If the trust's response to your complaint mentions specific actions they have taken, this is not empty reassurance — trusts are audited on whether they follow through.

## Bottom line

You have the right to raise concerns or make complaints about NHS care without any impact on your treatment. Start with PALS for informal resolution; escalate to a formal complaint if needed; and go to the Parliamentary Ombudsman if the trust's response is inadequate. Be specific, factual and clear about what outcome you want. And if your care was excellent, say so — it matters more than you might think. For context on what you should expect during an A&E visit, our [step-by-step guide](/guides/what-happens-in-ae/) and [patient rights guide](/guides/ae-patient-rights/) set the standard against which to measure your experience. You can find contact details for every trust's PALS team via our [hospital directory](/hospitals/).
`,
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
