import React, { useEffect, useState } from "react";


function TableOfContents(props) {

  return (
    <div className='toc'>
        <p className='toc-title'>Table of Contents</p>
        <a className='toc-a' href='#Oct30'>Building the Robotic Arm Tank</a>
        <a className='toc-a' href='#Nov6'>Programming Movement</a>
        <a className='toc-a' href='#Nov13'>Arm and Claw</a>
        <a className='toc-a' href='#Nov20'>Ultrasonic and Line Following Sensor</a>
        <a className='toc-a' href='#intro2'>Introduction for Part II</a>
        <a className='toc-a' href='#Dec14'>Designing the Car</a>
        <a className='toc-a' href='#Dec15'>Building the Car</a>
        <a className='toc-a' href='#Dec16'>Obstacle Course</a>
        <a className='toc-a' href='#Dec17'>Camera and Controls</a>
        <a className='toc-a' href='#Acknowledgement'>Acknowledgement</a>
    </div>
  );
}
export default TableOfContents;