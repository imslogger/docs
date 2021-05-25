module.exports = {
  dataStructuresSidebar: [
    'data_structures/readme',
    {
      type: 'category',
      label: 'Logs',
      items: [
        'data_structures/logs/readme',
      ]
    },
    {
      type: 'category',
      label: 'Views',
      items: [
        'data_structures/views/readme',
      ]
    },
  ],

  pythonSidebar: [
    'python/readme',
    {
      type: 'category',
      label: 'PyConPro',
      items: [
        'python/pyconpro/readme'
      ]
    },
    {
      type: 'category',
      label: 'imslogger-py',
      items: [
        'python/imslogger-py/readme'
      ]
    },
    {
      type: 'category',
      label: 'Backend Server',
      items: [
        'python/server/readme'
      ]
    },
  ],

  webInterfaceSidebar: [
    'web_interface/readme',
    {
      type: 'category',
      label: 'Frontend',
      items: [
        'web_interface/frontend/readme'
      ]
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'web_interface/api/readme'
      ]
    }
  ],

  rootSidebar: [
    'readme',
    {
      type: 'category',
      label: 'Docs',
      items: [
        'data_structures/readme',
        'python/readme',
        'web_interface/readme'
      ]
    }
  ]
};
