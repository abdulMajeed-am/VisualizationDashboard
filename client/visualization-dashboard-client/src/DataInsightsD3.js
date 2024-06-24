// src/DataInsightsD3.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DataInsightsD3 = () => {
  const chartRef = useRef();

  useEffect(() => {
    d3.json('http://localhost:5000/api/data-insights')
      .then(data => {
        createChart(data);
      })
      .catch(error => {
        console.error('Error fetching data insights:', error);
      });
  }, []);

  const createChart = (data) => {
    const svg = d3.select(chartRef.current)
      .attr('width', 800)
      .attr('height', 400);

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = +svg.attr('width') - margin.left - margin.right;
    const height = +svg.attr('height') - margin.top - margin.bottom;
    
    const x = d3.scaleBand()
      .domain(data.map(d => d.topic))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.intensity)]).nice()
      .range([height - margin.bottom, margin.top]);

    svg.append('g')
      .attr('fill', 'steelblue')
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', d => x(d.topic))
      .attr('y', d => y(d.intensity))
      .attr('height', d => y(0) - y(d.intensity))
      .attr('width', x.bandwidth());

    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end');

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));
  };

  return (
    <svg ref={chartRef}></svg>
  );
};

export default DataInsightsD3;
