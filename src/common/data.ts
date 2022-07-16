import {Stage, Team} from './types'

export const STAGES: Stage[] = [
  {
    id: 1,
    name: 'CRAWL',
    capabilities: [
      {
        id: 1,
        name: 'APIs have an identified owner',
        description: 'APIs must have a contact and x-slack defined',
        link: 'http://www.example.com',
      },
      {
        id: 2,
        name: 'API endpoints have a service tier',
        description: 'API endpoints must define a x-tier',
        link: 'http://www.example.com',
      },
    ],
  },
]

export const TEAMS: Team[] = [
  {
    id: 1,
    name: 'Checkout',
  },
]
