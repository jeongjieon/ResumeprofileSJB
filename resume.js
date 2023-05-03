const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})

// -------------------------
$(document).on('ready', function() {
    // Setup the initial menu state
    $('.menu-item li.active').append('<span class="arrow" />');
    $('.menu-item h4').append('<span class="glyphicon glyphicon-menu-right" />');
    
    // Update icon as needed
    $('.menu-item').on('click', function() {
      if($(this).hasClass('open')) {
        // Close
        $(this).removeClass('open');
      } else {
        // Open
        $(this).addClass('open');
      }
    });
  });
  






//--------------------------THIS IS THE CHART: TECHNICAL SKILLS CHART--------------------


const style = skills.currentStyle || window.getComputedStyle(skills); //Interance
  
function adjustSizes() {
  const div = document.getElementById('skills')
  const h1 = div.offsetHeight
  const h2 = div.getBoundingClientRect().height
  div.style.marginBottom = '-' + (Math.floor(Math.abs(h1 - h2)) + Math.abs(marginBottom) - 6) + 'px'
  window.requestAnimationFrame(adjustSizes)
}

//------------------Styling chart--------------------------------------//
const svgChart = {
  width: 500,
  height: 478, //able to see all chart of height, if height is short less than 250 than only will hover the chart
  radius: 80, //Size of circle 
  sectorWidth: .1, //size of bar line
  radScale: 9, //lift bar up or down
  sectorScale: 0.98,
  shorten: 0.99,
  index: {
    start: 0,
    increase: 0.2
  },
  class: 'chart',
  elements: [
     { id: 1, type: 'g', class: 'bars', transform: { translate: { x: 210, y: 194 } } }, //X: Width- left or right shift& Y: Height - up
     { id: 2, type: 'text', class: 'rating', transform: { translate: { x: 270, y: 318 } }, style: 'font: 11px "Open Sans", Arial; text-transform: uppercase; fill: #888;' },
     { id: 3, type: 'text', class: 'label', transform: { translate: { x: 340, y: 318 } }, style: 'font: 15px "Open Sans", Arial; text-transform: uppercase;' },
     { id: 4, type: 'text', class: 'title', transform: { translate: { x: 180, y: 32 } }, style: 'font: 20px "Open Sans", Arial; ' }

  ],
  borderColor: '#eee',
  _barColors: [ '#1F2F16', '#395B50', '#5A7684', '#92AFD7', '#C5D1EB' ],
  __barColors: [ '#6E0F0F', '#8A1F1F', '#AB4949', '#CE9494', '#E1BFBF' ],
  barColors: [ '#161E26', '#3B4249', '#4F7CAC', '#9EC5EF', '#C0D0E0' ]
}
//------------------ END OF Styling chart--------------------------------------//



//List of Technical skills 
const chartData = {
    'Programming-Language': {
        title: 'Programming Language',
        entries: [
          { value: 25, label: 'SQL'},
          { value: 90, label: 'Java'},
          { value: 72, label: 'C/C++'},
          { value: 13, label: 'C#'},
          { value: 80, label: 'XML'}, 
          { value: 92, label: 'HTML'}, 
          { value: 94, label: 'CSS'}, 
          { value: 70, label: 'JavaScript'}, 
          { value: 52, label: 'Assembly Language'}
      ]
    },
    'Statistical-Software': {
      title: 'Statistical Software',
      entries: [
        { value: 63, label: 'SAS'},
        { value: 74, label: 'Tableau'},
        { value: 21, label: 'R'},
        { value: 43, label: 'MATLAB'},
        { value: 53, label: 'SAP Crystal'}
    ]
  },
  
  'Cloud-Technologies': {
    title: 'Cloud Technologies',
    entries: [
      { value: 62, label: 'AWS'}
  ]
},
'Environment-Tools': {
  title: 'Environment/Tools',
  entries: [
  { value: 92, label: 'Eclipse'},
  { value: 96, label: 'Visual Studio Code'},
  { value: 72, label: 'Android Studio'},
  { value: 53, label: 'Docker'},
  { value: 96, label: 'Figma'},
  { value: 86, label: 'WordPress'},
  { value: 87, label: 'Wix'},
  { value: 78, label: 'GoDaddy'},
]
},

'Operating-Systems': {
        title: 'Operating Systems',
        entries: [
          { value: 100, label: 'Windows'},
          { value: 87, label: 'Linux'},
          { value: 72, label: 'Unix'},
          { value: 85, label: 'Ubuntu'},
          { value: 56, label: 'MAX OS'},
          { value: 86, label: 'Android OS'},
          { value: 66, label: 'IOS'},
          { value: 16, label: 'QtSpim'}


      ]
    },
'Databases': {
        title: 'Databases',
        entries: [
          { value: 46, label: 'MS Access'},
          { value: 35, label: 'Oracle'},

      ]
    },

    'Software-Management-Tool': {
      title: 'Software Management Tool',
      entries: [
        { value: 83, label: 'Trello'},
        { value: 56, label: 'Asana'}, 
    ]
  }, 
   
};

function drawBarCircleChart(id) {
    const data = chartData[id].entries.sort((a, b) => {
      return a.value < b.value
    });
    const size = 100 * svgChart.shorten //shows the color of percentage
    const bars = d3.select('#' + id + ' ' + '.' + svgChart.elements.find(x => x.id === 1).class) //shows the chart and name for program
    const rating = d3.select('#' + id + ' ' + '.' + svgChart.elements.find(x => x.id === 2).class)
    const label = d3.select('#' + id + ' ' + '.' + svgChart.elements.find(x => x.id === 3).class)
    const title = d3.select('#' + id + ' ' + '.' + svgChart.elements.find(x => x.id === 4).class)
       
    
    
    
    
    
    
    







    title.text(chartData[id].title); //shows title in the html
    
    var arc = d3.arc()
        .innerRadius((d, i) => { return ((svgChart.index.start + i * svgChart.index.increase) / svgChart.sectorScale) * svgChart.radius + svgChart.radScale })
        .outerRadius((d, i) =>{ return (((svgChart.index.start + i * svgChart.index.increase) / svgChart.sectorScale) + (svgChart.sectorWidth / svgChart.sectorScale)) * svgChart.radius + svgChart.radScale })
        .startAngle(Math.PI)
        .endAngle((d) => { return Math.PI + (d.value / size) * 2 * Math.PI })
        
    var path = bars.selectAll('path').data(data);

    path.enter().append("svg:path")
        .attr('fill', (d, i) => { return svgChart.barColors[i] })
        .attr('stroke', svgChart.borderColor)
        .transition()
        .ease(d3.easeElastic)
        .duration(2000)
        .delay((d, i) => { return i * 75 })
        .attrTween('d', arcTween)
 

// This is to show to chart rate/ grade for percentage.
    rating.selectAll('tspan')
        .data(data)
        .enter()
        .append('tspan')
        .attr('x', -50)
        .attr('y', (d, i) => { return i * 20 })
        .html((d, i) => {
          if (d.value === 100) {
            return 'Confident'
          } else if (d.value >= 95) {
            return 'Expert'    
          } else if (d.value >= 80) {
            return 'Pro' // Advanced
          } else if (d.value >= 65) {
            return 'Good'
          } else if (d.value >= 50) {
            return 'OK' // Good Enough, Average
          } else if (d.value >= 35) {
            return 'Fair'
          } else if (d.value >= 10) {
            return 'Basic'
          }
          return ''
        })
  
    label.selectAll('tspan')
        .data(data)
        .enter()
        .append('tspan')
        .attr('x', -50)
        .attr('y', (d, i) => { return i * 20 })
        .html((d, i) => { return d.label })
  
    function arcTween(b, j) {
        var i = d3.interpolate({value: 0}, b)
        return function(t) {
            return arc(i(t), j)
        }
    }
}

function show(id) {
  if (document.getElementById(id)) {
    document.getElementById(id).outerHTML = ''
  }
  svgCreate(id, 'skills')
  setTimeout(() => {
      drawBarCircleChart(id)
  }, 20);
}

function svgCreate(id, targetElm) {
  const div = document.createElement('DIV')
  div.id = id
  div.className = 'svg-wrapper'
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('viewbox', '0 0 ' + svgChart.width + ' ' + svgChart.height)
  svg.setAttribute('width', svgChart.width + 'px')
  svg.setAttribute('height', svgChart.height + 'px')

                                                                                                                    svg.setAttribute('width', svgChart.width + 'px')
                                                                                                                    svg.setAttribute('height', svgChart.height + 'px')


  svg.setAttribute('class', svgChart.class)
  for (const elm of svgChart.elements) {
        svg.appendChild(svgCreateElement(svg.namespaceURI, elm.type, elm.class, elm.transform, elm.style))
  }
  div.appendChild(svg)
  
  const a = document.createElement('A')
  a.href = 'javascript:void(0)'
  a.onclick = function() { return saveSVG(this, id) }
  div.appendChild(a)
  
  if (!targetElm) {
    return document.body.appendChild(div)
  }
  return document.getElementById(targetElm).appendChild(div)
}

//function svgCreateElement(svgNS, elmType, elmClass, elmTransform, elmStyle, scale) {
function svgCreateElement(svgNS, elmType, elmClass, elmTransform, elmStyle) {
  const elm = document.createElementNS(svgNS,elmType)
  elm.setAttribute('class', elmClass)
  if (elmClass === 'title') {
    elm.setAttribute('text-anchor', 'middle')
  }
  if (elmTransform && elmTransform.translate) {
    elm.setAttribute('transform', 'translate(' + elmTransform.translate.x + ', ' + elmTransform.translate.y + ')')
  }
   if (elmStyle) {
    elm.setAttribute('style', elmStyle)
  }
  
  elm.setAttribute('transform', elm.getAttribute('transform'))
  return elm
}

// This will able to show in the HTML. Calling the method
function showAll() {
  show('Programming-Language')
  show('Statistical-Software')
  show('Cloud-Technologies')
  show('Environment-Tools')
  show('Operating-Systems')
  show('Databases')
  show('Software-Management-Tool')
}
showAll() //Interance from test.html
//--------------------------End of THIS IS THE CHART: TECHNICAL SKILLS CHART--------------------


