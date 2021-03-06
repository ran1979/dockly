'use strict';

exports.widget = {};
exports.getWidget = function(blessed, screen) {
  let widget = blessed.bar({
    label: 'Containers vs Images',
    style: {
      fg: 'blue',
      bg: 'default',
      border: {
        fg: 'default',
        bg: 'default'
      },
      selected: {
        bg: 'green'
      }
    },
    border: {
      type: 'line',
      fg: '#00ff00'
    },
    hover: {
      bg: 'blue'
    },
    barWidth: 6,
    barSpacing: 15,
    xOffset: 3,
    maxHeight: 15,
    width: '15%',
    height: '18%',
    top: '53%',
    left: '70%',
  });

  this.widget = widget;
  return widget;

};

exports.update = function(data) {

  this.widget.setData({
    titles: ['Containers', 'Images'],
    data: [
      data.Containers,
      data.Images
    ]
  })

};
