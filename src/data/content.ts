export interface Standard {
  slug: string;
  title: string;
  summary: string;
  updated: string;
  audience: string;
  sections: { heading: string; body: string[] }[];
}

export const standards: Standard[] = [
  {
    slug: 'timeliness-of-notes',
    title: 'Timeliness of clinical notes',
    summary: 'When each note type must be started, completed, and signed.',
    updated: '2026-09-15',
    audience: 'All providers',
    sections: [
      {
        heading: 'Purpose',
        body: [
          'Timely documentation supports continuity of care, accurate coding, and patient safety. This is template text to be replaced.',
        ],
      },
      {
        heading: 'Expected timeframes',
        body: [
          'Outpatient encounter notes: completed and signed within 2 business days.',
          'Inpatient progress notes: completed by the end of the shift in which care was delivered.',
          'Discharge summaries: completed within 24 hours of discharge.',
          'Consult responses: documented within the timeframe set by the requested urgency.',
        ],
      },
      {
        heading: 'Late entries and addenda',
        body: [
          'Label any late entry clearly with the current date and time, and reference the date of the original event.',
          'Use an addendum, not an edit, to add information to a signed note.',
        ],
      },
    ],
  },
  {
    slug: 'problem-list-and-medication-reconciliation',
    title: 'Problem list and medication reconciliation',
    summary: 'Keep the problem list current and reconcile medications at every transition.',
    updated: '2026-08-30',
    audience: 'Providers, nursing, pharmacy',
    sections: [
      {
        heading: 'Problem list',
        body: [
          'Review the active problem list at each visit. Resolve, update, or add entries as needed.',
          'Use standardized terminology so entries map to coded concepts.',
        ],
      },
      {
        heading: 'Medication reconciliation',
        body: [
          'Reconcile at admission, transfer, discharge, and at least annually in primary care.',
          'Document the source of each medication list and any discrepancies resolved.',
        ],
      },
    ],
  },
  {
    slug: 'medical-necessity-and-specificity',
    title: 'Medical necessity and diagnostic specificity',
    summary: 'Document the clinical picture so diagnoses and services are supported.',
    updated: '2026-07-21',
    audience: 'Providers, coders, CDI specialists',
    sections: [
      {
        heading: 'Support the diagnosis',
        body: [
          'Link each diagnosis to supporting findings, assessment, and plan.',
          'Document severity, acuity, laterality, and etiology when known.',
        ],
      },
      {
        heading: 'Avoid common gaps',
        body: [
          'Avoid unsupported abbreviations and copied-forward text that no longer applies.',
          'State clinical reasoning in the assessment, not only a list of diagnoses.',
        ],
      },
    ],
  },
  {
    slug: 'copy-forward-and-templates',
    title: 'Copy-forward and template use',
    summary: 'Use copy-forward and templates responsibly to keep notes accurate.',
    updated: '2026-06-10',
    audience: 'All providers',
    sections: [
      {
        heading: 'Principles',
        body: [
          'Review and update every copied section for the current encounter.',
          'Remove content that does not apply to this patient or visit.',
        ],
      },
    ],
  },
];

export interface NoteTemplate {
  slug: string;
  title: string;
  summary: string;
  setting: string;
  body: string;
}

export const templates: NoteTemplate[] = [
  {
    slug: 'history-and-physical',
    title: 'History and physical (H&P)',
    summary: 'Comprehensive admission or new-patient evaluation.',
    setting: 'Inpatient / outpatient',
    body: `CHIEF COMPLAINT:
[Reason for visit in the patient's words]

HISTORY OF PRESENT ILLNESS:
[Onset, location, duration, character, aggravating/relieving factors, associated symptoms]

PAST MEDICAL / SURGICAL HISTORY:
[List]

MEDICATIONS / ALLERGIES:
[Reconciled list; allergies and reactions]

SOCIAL / FAMILY HISTORY:
[Pertinent items]

REVIEW OF SYSTEMS:
[Pertinent positives and negatives]

PHYSICAL EXAM:
Vitals: [BP, HR, RR, Temp, SpO2, Wt]
[System-based findings]

DATA:
[Labs, imaging, other results]

ASSESSMENT:
[Summary statement and clinical reasoning]

PLAN:
1. [Problem] - [plan]
2. [Problem] - [plan]`,
  },
  {
    slug: 'soap-progress-note',
    title: 'SOAP progress note',
    summary: 'Focused follow-up visit or daily progress note.',
    setting: 'Inpatient / outpatient',
    body: `SUBJECTIVE:
[Interval history, symptoms, patient concerns]

OBJECTIVE:
Vitals: [values]
Exam: [focused findings]
Data: [new results]

ASSESSMENT:
[Problem-based assessment and status: improving / stable / worsening]

PLAN:
[Orders, medication changes, education, follow-up]`,
  },
  {
    slug: 'discharge-summary',
    title: 'Discharge summary',
    summary: 'Hospital course and handoff to the next provider.',
    setting: 'Inpatient',
    body: `ADMISSION DATE: [date]    DISCHARGE DATE: [date]

PRINCIPAL DIAGNOSIS:
[Diagnosis]

SECONDARY DIAGNOSES:
[List]

HOSPITAL COURSE:
[Brief problem-based narrative]

PROCEDURES:
[List or none]

CONDITION AT DISCHARGE:
[Condition, functional status]

DISCHARGE MEDICATIONS:
[New / changed / stopped / continued]

FOLLOW-UP:
[Appointments, pending results, responsible clinician]

PATIENT INSTRUCTIONS:
[Diet, activity, return precautions]`,
  },
  {
    slug: 'consult-note',
    title: 'Consult request and response',
    summary: 'Clear question, relevant background, and actionable recommendations.',
    setting: 'Inpatient / outpatient',
    body: `REQUEST
Requesting clinician: [name]    Urgency: [routine / urgent / emergent]
Clinical question: [specific question]
Pertinent background: [brief]

RESPONSE
Reason for consult: [restate]
Findings: [history, exam, data]
Impression: [assessment]
Recommendations:
1. [recommendation]
2. [recommendation]
Follow-up: [will follow / sign off]`,
  },
];

export interface Checklist {
  slug: string;
  title: string;
  items: string[];
}

export const checklists: Checklist[] = [
  {
    slug: 'before-signing',
    title: 'Before you sign a note',
    items: [
      'Patient identifiers and encounter date are correct',
      'Chief complaint and history reflect this encounter',
      'Copied-forward text has been reviewed and updated',
      'Assessment states clinical reasoning and supports each diagnosis',
      'Plan addresses each active problem with next steps',
      'Medications and allergies are reconciled',
      'Orders, referrals, and follow-up are documented',
    ],
  },
  {
    slug: 'discharge-handoff',
    title: 'Discharge handoff',
    items: [
      'Principal and secondary diagnoses are documented',
      'Pending results and responsible clinician are listed',
      'Medication changes are explained',
      'Follow-up appointments are scheduled and recorded',
      'Patient education and return precautions are documented',
    ],
  },
  {
    slug: 'telehealth-visit',
    title: 'Telehealth visit documentation',
    items: [
      'Visit modality (video or audio-only) is recorded',
      'Patient and provider locations are recorded',
      'Consent for telehealth is documented',
      'Limits of the remote exam are noted',
      'Technical issues and contingency plan are documented',
    ],
  },
];

export const abbreviations = [
  { term: 'Do not use: U', meaning: 'Write "unit" in full' },
  { term: 'Do not use: QD / QOD', meaning: 'Write "daily" or "every other day"' },
  { term: 'Do not use: trailing zero (5.0 mg)', meaning: 'Write 5 mg' },
  { term: 'Do not use: lack of leading zero (.5 mg)', meaning: 'Write 0.5 mg' },
  { term: 'Do not use: MS, MSO4, MgSO4', meaning: 'Write "morphine sulfate" or "magnesium sulfate"' },
];

export interface Course {
  title: string;
  format: string;
  length: string;
  audience: string;
  credit: string;
}

export const courses: Course[] = [
  { title: 'Documentation fundamentals', format: 'Online module', length: '45 min', audience: 'New providers', credit: 'Yes' },
  { title: 'Diagnostic specificity workshop', format: 'Live webinar', length: '60 min', audience: 'Providers, CDI', credit: 'Yes' },
  { title: 'Using templates and copy-forward safely', format: 'Online module', length: '30 min', audience: 'All providers', credit: 'No' },
  { title: 'Telehealth documentation essentials', format: 'Recorded video', length: '25 min', audience: 'All providers', credit: 'No' },
  { title: 'Coding and documentation for coders', format: 'Live webinar', length: '90 min', audience: 'Coders', credit: 'Yes' },
];

export const jobAids = [
  { title: 'Documentation quick-start card (PDF)', summary: 'One-page overview of note essentials.' },
  { title: 'Assessment and plan examples (PDF)', summary: 'Sample problem-based assessments with reasoning.' },
  { title: 'Specificity cheat sheet (PDF)', summary: 'Common diagnoses and the details to capture.' },
  { title: 'Template builder guide (PDF)', summary: 'How to request or modify a note template.' },
];

export interface PolicyRef {
  title: string;
  identifier: string;
  type: string;
  summary: string;
  effective: string;
}

export const policies: PolicyRef[] = [
  { title: 'Medical record documentation', identifier: 'POL-0001', type: 'Policy', summary: 'Sample policy covering content, authentication, and timeliness of entries.', effective: '2026-01-01' },
  { title: 'Use of copy-forward functionality', identifier: 'POL-0002', type: 'Directive', summary: 'Sample directive on responsible use of copy and paste.', effective: '2025-11-15' },
  { title: 'Telehealth documentation requirements', identifier: 'POL-0003', type: 'Handbook', summary: 'Sample handbook section for virtual care documentation.', effective: '2026-03-01' },
  { title: 'Patient access to health records', identifier: 'REG-0100', type: 'Regulation', summary: 'Sample reference on patient access and release of information.', effective: '2024-07-01' },
  { title: 'Coding and billing compliance', identifier: 'REG-0200', type: 'Regulation', summary: 'Sample reference on documentation supporting billed services.', effective: '2025-04-01' },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  { question: 'How soon must I sign my notes?', answer: 'Timeframes depend on note type. See the timeliness standard for current expectations. This is template text.' },
  { question: 'Can I use copy-forward?', answer: 'Yes, with care. Review and update every copied section for the current encounter and remove anything that no longer applies.' },
  { question: 'How do I correct an error in a signed note?', answer: 'Do not edit a signed note. Enter an addendum that identifies the correction and the date and time it was made.' },
  { question: 'Who can I ask about diagnostic specificity?', answer: 'Contact the clinical documentation improvement (CDI) team using the contact page.' },
  { question: 'How do I request a new note template?', answer: 'Send a request with the clinical use case and a draft layout using the contact page.' },
  { question: 'Where can I find required training?', answer: 'See the training page for modules, webinars, and job aids.' },
];

export const updates = [
  { date: '2026-09-15', title: 'Updated timeliness standard', summary: 'Clarified timeframes for outpatient encounter notes.' },
  { date: '2026-08-30', title: 'New medication reconciliation guidance', summary: 'Added transition-of-care checkpoints.' },
  { date: '2026-07-21', title: 'Telehealth checklist released', summary: 'New quick reference for virtual visits.' },
];
