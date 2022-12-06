/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Studio overview',
      id: 'studio',
    },
    {
      type: 'doc', 
      label:'Learn the concepts',
      id: 'state-machines-and-statecharts',
    },
    {
      type: 'category',
      label: 'States',
      items: [
        {
          type: 'doc',
          id: 'states/intro',
          label: 'Intro'
        },
        'states/initial-states',
        'states/final-states',
        'states/parent-states',
        'states/parallel-states',
        'states/history-states'
      ]
    },
    {
      type: 'category',
      label: 'Transitions and events',
      items: [
        {
          type: 'doc',
          id: 'transitions-and-events/intro',
          label: 'Intro'
        },
        'transitions-and-events/guards',
        'transitions-and-events/eventless-transitions',
        'transitions-and-events/delayed-transitions',
        'transitions-and-events/self-transitions',
        'transitions-and-events/state-done-events',
        'transitions-and-events/invoke-done-events',
        'transitions-and-events/invoke-error-events'
      ]
    },
    {
      type: 'category',
      label: 'Actions and actors',
      items: [
        'actions-and-actors/entry-and-exit-actions',
        'actions-and-actors/actors',
      ]
    },
    {
      type: 'category',
      label: 'Modeling',
      items: [
        'descriptions',
      ]
    },
    {
      type: 'category',
      label: 'Collaboration and sharing',
      items: [
        'import-from-code',
        'export-as-code'
      ]
    },
    {
      type: 'doc', 
      label:'Projects and teams',
      id: 'projects-and-teams',
    },
    {
      type: 'doc', 
      label:'Discover machines',
      id: 'discover',
    },
    {
      type: 'category',
      label: 'XState',
      items: [
        {
          type: 'doc',
          id: 'xstate/intro',
          label: 'Intro',
        },
        'xstate/installation',
        'tools/developer-tools',
        {
          type: 'category',
          label: 'Basics',
          items: [
            'xstate/basics/what-is-a-statechart',
            'xstate/basics/options',
            'xstate/basics/inline-vs-named-options',
          ],
        },
        {
          type: 'category',
          label: 'Actions and context',
          items: [
            'xstate/actions/actions',
            'xstate/actions/context',
            'xstate/actions/built-in-actions',
          ],
        },
        {
          type: 'category',
          label: 'Transitions and choices',
          items: [
            'xstate/transitions-and-choices/guards',
            'xstate/transitions-and-choices/guarded-actions',
            'xstate/transitions-and-choices/always',
            'xstate/transitions-and-choices/after',
            'xstate/transitions-and-choices/internal-external',
            'xstate/transitions-and-choices/transition-descriptions',
          ],
        },
        {
          type: 'category',
          label: 'Running machines',
          items: [
            'xstate/running-machines/intro',
            'xstate/running-machines/react',
            'xstate/running-machines/node',
          ],
        },
        {
          type: 'category',
          label: 'Deep dive: states',
          items: [
            'xstate/states/parent-and-child-states',
            'xstate/states/other-state-attributes',
            'xstate/states/advanced-transitions',
            'xstate/states/final-states',
            'xstate/states/parallel-states',
            'xstate/states/history-states',
            'xstate/states/in-state-guards',
          ],
        },
        {
          type: 'category',
          label: 'Model-based testing',
          items: [
            'xstate/model-based-testing/intro',
            'xstate/model-based-testing/when-to-use',
            'xstate/model-based-testing/quickstart',
            'xstate/model-based-testing/test-paths',
            'xstate/model-based-testing/assertions',
            'xstate/model-based-testing/event-cases',
            'xstate/model-based-testing/jest',
            'xstate/model-based-testing/vitest',
            'xstate/model-based-testing/cypress',
            'xstate/model-based-testing/playwright',
          ],
        },
        {
          type: 'category',
          label: 'Actors',
          items: [
            'xstate/actors/intro',
            'xstate/actors/promises',
            'xstate/actors/actions-vs-actors',
            'xstate/actors/callbacks',
            'xstate/actors/machines',
            'xstate/actors/observables',
            'xstate/actors/parent-child-communication',
            'xstate/actors/spawn',
          ],
        },
        {
          type: 'category',
          label: 'TypeScript',
          items: [
            'xstate/typescript/typegen',
            'xstate/typescript/type-helpers',
            'xstate/typescript/troubleshooting',
          ],
        },
        'xstate/templates',
        'xstate/packages/xstate-cli',
        'xstate/packages/xstate-fsm',
        'xstate/packages/xstate-graph',
        'xstate/packages/xstate-test',
        'xstate/packages/xstate-immer',
        'xstate/packages/xstate-react',
        'xstate/packages/xstate-svelte',
        'xstate/packages/xstate-vue',
        {
          type: 'category',
          label: 'Advanced Topics',
          items: ['xstate/advanced/react-patterns', 'xstate/advanced/scxml'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Other Stately tools',
      items: [
        'tools/visualizer',
        'tools/inspector'
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: ['examples/intro'],
    },
    {
      type: 'doc',
      id: 'glossary',
    },
  ],
};

module.exports = sidebars;
