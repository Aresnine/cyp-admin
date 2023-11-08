const rules = [
  ['al-light', { color: '#86909c', 'font-size': '13px' }],
  ['al-hover', { color: 'blue' }],
  [
    /^bd-(\w+)$/,
    (match: string) => {
      return { border: `1px solid ${match[1]}` }
    }
  ],
  [
    'dividing',
    {
      'border-left': '1px solid #4e5969',
      height: '13px',
      margin: '0px 7px',
      'align-self': 'center'
    }
  ],
  [
    'spot',
    {
      width: '3px',
      height: '3px',
      'background-color': '#101011',
      'border-radius': '50%',
      'align-self': 'center',
      margin: '0 5px'
    }
  ],
  // 手型鼠标
  [
    'pointer',
    {
      cursor: 'pointer'
    }
  ],
  // 禁止选择
  [
    'no-select',
    {
      'user-select': 'none'
    }
  ]
]

export default rules
