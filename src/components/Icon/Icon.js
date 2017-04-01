import React, { Component } from 'react';

import './Icon.css';

class Icon extends Component {
  render() {
    return (
      <div className="icon" {...this.props} >
        <svg viewBox="0 0 18 18">

          <path id="calendar-tab" className="normal" d="m 1.5,2.5 0,14 15,0 0,-14 -2,0 0,2 -2,0 0,-3.5 0,3.5 -2,0 0,-2 -3,0 0,2 -2,0 0,-3.5 0,3.5 -2,0 0,-2 z m 0,3 15,0 0,11 -15,0 z m 4,2 6.5,0 -3,7 -2.5,0 2,-5 -3,0 z"/>
          <path id="calendar-tab-flat" className="normal" d="M 2,3 2,16 16,16 16,3 14,3 14,5 13,5 13,2 12,2 12,5 11,5 11,3 7,3 7,5 6,5 6,2 5,2 5,5 4,5 4,3 Z m 1,3 12,0 0,9 -12,0 z m 3,2 6,0 -3,6 -2.5,0 2,-4 -2.5,0 z"/>
          <path id="calendar-tab-inverted" className="inverted" d="m 1.5,3.5 0,13 15,0 0,-13 -3,0 0,1 -3,0 0,-1 -3,0 0,1 -3,0 0,-1 z m 3,3 9,0 0,7 -9,0 z m 0,-5 0,3 3,0 0,-3 z m 6,0 0,3 3,0 0,-3 z m -5,5 7,0 -3,7 -3,0 1.7,-4 -2.7,0 z"/>
          <path id="task-tab" className="normal" d="m 4.5,2.5 -2,0 0,14 13,0 0,-14 -2,0 0,2 1,0 0,11 -11,0 0,-11 1,0 z m 2,-1 5,0 0,3 -5,0 z M 5.1,10.8 6.7,9.2 8.5,10.7 12,7 l 1.5,1.5 -5,5 z"/>
          <path id="task-tab-flat" className="normal" d="m 5,3 -2,0 0,13 12,0 0,-13 -2,0 0,3 1,0 0,9 L 4,15 4,6 5,6 Z M 6,2 12,2 12,6 6,6 Z M 5.4,11.3 6.7,9.7 8.5,11.2 11.5,7.5 13,9 8.5,14 Z"/>
          <path id="task-tab-inverted" className="inverted" d="m 5.5,2.5 -3,0 0,14 13,0 0,-14 -3,0 0,3 0,0 0,8 -7,0 0,-8 0,0 z m 0,-1 7,0 0,4 -7,0 z m 0.1,9.3 1.5,-2.1 1.3,1.2 2.4,-3 1.7,1.6 -4,4.8 z"/>
          <path id="synchronize" className="normal" d="m 11.5,1.9 0,3.7 c 3.7,1.8 1.7,5.5 -1,6.8 l -2,-1.9 0,6 5.7,0 -1.6,-1.6 C 18.5,12.5 18.2,2.7 11.5,1.9 Z m -3.8,3.8 1.8,1.8 0,-6 -5.8,0 L 5.3,3 C -0.9,6.3 0.4,15 6.5,16.1 l 0,-3.6 C 3,10.7 4.5,7 7.7,5.7 Z"/>
          <path id="synchronize-flat" className="normal" d="m 11,2.4 0,3.7 c 3,1.6 2.4,4.4 0,5.8 L 9,10 l 0,6 5.7,0 -1.6,-1.6 C 17.6,12 17,3.2 11,2.4 Z M 7.2,6.2 9,8 9,2 3.2,2 4.8,3.5 C -0.4,6.7 2.3,14.4 7,15.6 L 7,12 C 4.1,10.2 4.3,7.3 7.2,6.2 Z"/>
          <path id="synchronize-inverted" className="inverted" d="m 11.5,1.9 0,3.7 c 3.6,1.2 2.1,5.4 -0.7,6.5 L 8.5,9.5 l 0,7 6.7,0 -1.9,-2 C 18.6,11.6 18,2.8 11.5,1.9 Z M 7,6 9.5,8.5 l 0,-7 -6.8,0 2.2,2.1 C -0.9,6.8 0.6,14.8 6.5,16.1 l 0,-3.6 C 3.5,11 4,7.3 7,6 Z"/>
          <path id="newevent" className="normal" d="m 1.5,2.5 0,14 15,0 0,-14 -2,0 0,2 -2,0 0,-3.5 0,3.5 -2,0 0,-2 -3,0 0,2 -2,0 0,-3.5 0,3.5 -2,0 0,-2 z m 0,3 15,0 0,11 -15,0 z m 6,2 3,0 0,2 2,0 0,3 -2,0 0,2 -3,0 0,-2 -2,0 0,-3 2,0 z"/>
          <path id="newevent-flat" className="normal" d="M 2,3 2,16 16,16 16,3 14,3 14,5 13,5 13,2 12,2 12,5 11,5 11,3 7,3 7,5 6,5 6,2 5,2 5,5 4,5 4,3 Z m 1,3 12,0 0,9 -12,0 z m 5,2 2,0 0,2 2,0 0,2 -2,0 0,2 -2,0 0,-2 -2,0 0,-2 2,0 z"/>
          <path id="newevent-inverted" className="inverted" d="m 1.5,3.5 0,13 15,0 0,-13 -3,0 0,1 -3,0 0,-1 -3,0 0,1 -3,0 0,-1 z m 3,3 9,0 0,7 -9,0 z m 0,-5 0,3 3,0 0,-3 z m 6,0 0,3 3,0 0,-3 z m 0,5 0,2 2,0 0,3 -2,0 0,2 -3,0 0,-2 -2,0 0,-3 2,0 0,-2 z"/>
          <path id="newtask" className="normal" d="m 4.5,2.5 -2,0 0,14 13,0 0,-14 -2,0 0,2 1,0 0,11 -11,0 0,-11 1,0 z m 2,-1 5,0 0,3 -5,0 z m 1,5 3,0 0,2 2,0 0,3 -2,0 0,2 -3,0 0,-2 -2,0 0,-3 2,0 z"/>
          <path id="newtask-flat" className="normal" d="m 5,3 -2,0 0,13 12,0 0,-13 -2,0 0,3 1,0 0,9 -10,0 0,-9 1,0 z m 1,-1 6,0 0,4 -6,0 z m 2,6 2,0 0,2 2,0 0,2 -2,0 0,2 -2,0 0,-2 -2,0 0,-2 2,0 z"/>
          <path id="newtask-inverted" className="inverted" d="m 5.5,2.5 -3,0 0,14 13,0 0,-14 -3,0 0,3 0,0 0,8 -7,0 0,-8 0,0 z m 0,-1 7,0 0,4 -7,0 z m 2,5 3,0 0,2 2,0 0,3 -2,0 0,2 -3,0 0,-2 -2,0 0,-3 2,0 z"/>
          <path id="edit" className="normal" d="M 3.6,11.5 2.2,15.7 6.5,14.3 15.8,5 13,2.2 Z m 0,0 L 4.1,11 7,13.8 6.5,14.3 2.2,15.7 Z"/>
          <path id="edit-flat" className="normal" d="M 4.2,11 2.5,15.5 7,13.8 Z M 7.7,13 15.5,5.3 12.7,2.5 5,10.3 Z"/>
          <path id="edit-inverted" className="inverted" d="M 3.6,11.5 2.2,15.7 6.5,14.3 15.8,4.9 13,2.1 Z m 1,-1 0.4,-0.4 2.8,2.8 -0.4,0.4 z"/>
          <path id="delete" className="normal" d="m 9,1.5 c 4.2,0 7.5,3.3 7.5,7.5 0,4.1 -3.3,7.5 -7.5,7.5 C 4.9,16.5 1.5,13.2 1.5,9 1.5,4.8 4.9,1.5 9,1.5 Z m -3,3 7.5,7.5 C 16.3,7.1 11,1.7 6,4.5 Z M 4.5,6 c -3.1,5.4 2.9,10 7.5,7.5 z"/>
          <path id="delete-inverted" className="inverted" d="m 9,1.5 c 4.2,0 7.5,3.3 7.5,7.5 0,4.1 -3.3,7.5 -7.5,7.5 C 4.9,16.5 1.5,13.2 1.5,9 1.5,4.8 4.9,1.5 9,1.5 Z M 7,5 13,11 C 14.5,6.6 11.2,3.6 7,5 Z M 5,7 c -1.6,4.3 1.5,7.7 6,6 z"/>
          <path id="today" className="normal" d="m 1.5,2.5 0,14 15,0 0,-14 -2,0 0,2 -2,0 0,-3.5 0,3.5 -2,0 0,-2 -3,0 0,2 -2,0 0,-3.5 0,3.5 -2,0 0,-2 z m 0,3 15,0 0,11 -15,0 z m 6,2 3,0 0,4 2,0 -3.5,3 -3.5,-3 2,0 z"/>
          <path id="today-flat" className="normal" d="M 2,3 2,16 16,16 16,3 14,3 14,5 13,5 13,2 12,2 12,5 11,5 11,3 7,3 7,5 6,5 6,2 5,2 5,5 4,5 4,3 Z m 1,3 12,0 0,9 -12,0 z m 5,1 2,0 0,3 2,0 -3,4 -3,-4 2,0 z"/>
          <path id="today-inverted" className="inverted" d="m 1.5,3.5 0,13 15,0 0,-13 -3,0 0,1 -3,0 0,-1 -3,0 0,1 -3,0 0,-1 z m 3,3 9,0 0,7 -9,0 z m 0,-5 0,3 3,0 0,-3 z m 6,0 0,3 3,0 0,-3 z m -3,5 3,0 0,3 3,0 -4.5,4 -4.5,-4 3,0 z"/>
          <path id="print" className="normal" d="m 4.5,2.5 0,4 -1.5,0 c -0.8,0 -1.5,1.1 -1.5,2 l 0,3 c 0,1 1.4,2 2.5,2 l 1.5,0 0,-1 7,0 0,1 1.5,0 c 1,0 2.5,-1 2.5,-2 l 0,-3 c 0,-0.8 -0.6,-2 -1.5,-2 l -1.5,0 0,-4 z m 0,0 9,0 0,6 -9,0 z m 0,6 2,0 0,2 -2,0 z m 0,5.4 0,1.6 m -2.5,0 14,0 m -2.5,0 0,-1.6"/>
          <path id="print-flat" className="normal" d="M 5,3 5,7 4,7 C 3.2,7 2,7.6 2,8.5 l 0,3 c 0,1 0.9,1.5 2,1.5 l 1,0 0,1 -1,0 0,1 10,0 0,-1 -1,0 0,-1 1,0 c 1,0 2,-0.5 2,-1.5 l 0,-3 C 16,7.7 14.8,7 14,7 l -1,0 0,-4 z m 1,1 6,0 0,4 -6,0 z m -1,5 1,0 0,1 -1,0 z m 1,3 6,0 0,2 -6,0 z"/>
          <path id="print-inverted" className="inverted" d="m 3.5,2.5 0,5 -0.5,0 c -0.8,0 -1.5,1.1 -1.5,2 l 0,2 c 0,0.8 0.4,2 2.5,2 l -1.5,0 0,2 13,0 0,-2 -1.5,0 c 2,0 2.5,-1.1 2.5,-2 l 0,-2 c 0,-0.8 -0.6,-2 -1.5,-2 l -0.5,0 0,-5 z m 2,2 7,0 0,3 -7,0 z m -1,5 2,0 0,1 -2,0 z m 1,3 7,0 0,1 -7,0 z"/>
          <path id="find" className="normal" d="M 8,2.5 C 5,2.5 2.5,5 2.5,8 c 0,3 2.5,5.5 5.5,5.5 3,0 5.5,-2.4 5.5,-5.5 C 13.5,5 11,2.5 8,2.5 Z m 0,2 c 2,0 3.5,1.5 3.5,3.5 0,2 -1.5,3.5 -3.5,3.5 C 6,11.5 4.5,10 4.5,8 4.5,6 6,4.5 8,4.5 Z m 4.5,7 -1,1 3,3 1,-1 z"/>
          <path id="find-flat" className="normal" d="M 8 3 A 5 5 0 0 0 3 8 A 5 5 0 0 0 8 13 A 5 5 0 0 0 13 8 A 5 5 0 0 0 8 3 z M 8 4 A 4 4 0 0 1 12 8 A 4 4 0 0 1 8 12 A 4 4 0 0 1 4 8 A 4 4 0 0 1 8 4 z m 4,7 -1,1 3,3 1,-1 z"/>
          <path id="find-inverted" className="inverted" d="M 11,12.7 14.3,16 16,14 12.7,10.9 C 13.1,10 13.5,9 13.5,8 13.5,5 11,2.5 8,2.5 5,2.5 2.5,5 2.5,8 c 0,3 2.5,5.5 5.5,5.5 1,0 2,0 3,-0.8 z M 8,5 c 1.6,0 3,1.3 3,3 0,1.6 -1.3,3 -3,3 C 6.3,11 5,9.6 5,8 5,6.3 6.3,5 8,5 Z"/>
          <path id="category" className="normal" d="M 4 2.5 C 3.3 2.5 2.5 3.3 2.5 4 L 2.5 8 L 10 15.5 L 15.5 10 L 8 2.5 L 4 2.5 z M 6 4 A 2 2 0 0 1 8 6 A 2 2 0 0 1 6 8 A 2 2 0 0 1 4 6 A 2 2 0 0 1 6 4 z"/>
          <path id="category-flat" className="normal" d="M 4.5,3 C 3.8,3 3,3.8 3,4.5 L 3,8 10,15.5 15.5,10 8,3 Z m 2,1.5 c 1.1,0 2,0.9 2,2 0,1.1 -0.9,2 -2,2 -1.1,0 -2,-0.9 -2,-2 0,-1.1 0.9,-2 2,-2 z"/>
          <path id="category-inverted" className="inverted" d="M 4 2.5 C 3.3 2.5 2.5 3.3 2.5 4 L 2.5 8 L 10 15.5 L 15.5 10 L 8 2.5 L 4 2.5 z M 6 4 A 2 2 0 0 1 8 6 A 2 2 0 0 1 6 8 A 2 2 0 0 1 4 6 A 2 2 0 0 1 6 4 z"/>
          <path id="complete" className="normal" d="M 1.5,10.5 3,8.5 6.7,11.7 C 9,7.8 12.6,5.6 16.5,3.5 l 0,1 c -4,3.1 -7,6.7 -9,11.2 z"/>
          <path id="complete-flat" className="normal" d="m 2,10.5 1.5,-2 3.7,3 C 9.5,7.6 12.1,5.6 16,3.5 l 0,1 c -4,3.1 -8.5,11 -8.5,11 z"/>
          <path id="complete-inverted" className="inverted" d="M 1.5,10.5 3,7.5 6.7,10.7 C 9,6.8 12.6,4.6 16.5,2.5 l 0,2 c -4,3.1 -7,6.7 -9,11.2 z"/>
          <path id="priority" className="normal" d="m 7.5,2.5 3,0 0,8 -3,0 z M 10.5,14 A 1.5,1.5 0 0 1 9,15.5 1.5,1.5 0 0 1 7.5,14 1.5,1.5 0 0 1 9,12.5 1.5,1.5 0 0 1 10.5,14 Z"/>
          <path id="priority-flat" className="normal" d="m 7,3 4,0 -1,7.9 -2,0 z m 3.5,11 c 0,0.8 -0.6,1.5 -1.5,1.5 -0.8,0 -1.5,-0.6 -1.5,-1.5 0,-0.8 0.6,-1.5 1.5,-1.5 0.8,0 1.5,0.6 1.5,1.5 z"/>
          <path id="priority-inverted" className="inverted" d="m 7.5,2.5 3,0 0,8 -3,0 z m 0,10 3,0 0,3 -3,0 z"/>
          <path id="pane" className="normal" d="m 1.5,2.5 0,14 15,0 0,-14 -2,0 0,2 -2,0 0,-3.5 0,3.5 -2,0 0,-2 -3,0 0,2 -2,0 0,-3.5 0,3.5 -2,0 0,-2 z m 0,3 15,0 0,11 -15,0 z"/>
          <path id="pane-flat" className="normal" d="M 2,3 2,16 16,16 16,3 14,3 14,5 13,5 13,2 12,2 12,5 11,5 11,3 7,3 7,5 6,5 6,2 5,2 5,5 4,5 4,3 Z m 1,3 12,0 0,9 -12,0 z"/>
          <path id="pane-inverted" className="inverted" d="m 0.5,2.5 0,15 17,0 0,-15 -4,0 0,1 -3,0 0,-1 -3,0 0,1 -3,0 0,-1 z m 2,3 13,0 0,10 -13,0 z m 2,-5 0,3 3,0 0,-3 z m 6,0 0,3 3,0 0,-3 z"/>
          <path id="save" className="normal" d="m 2.5,2.5 0,13 2,0 0,-6 8,0 0,6 3,0 0,-13 z m 2,0 9,0 0,5 -9,0 z m 2,9 4,0 0,4 -4,0 z"/>
          <path id="save-flat" className="normal" d="M 2,2 2,16 16,16 16,2 Z M 4,3 14,3 14,8 4,8 Z m 0,7 7,0 0,5 -7,0 z m 1,1 0,3 2,0 0,-3 z"/>
          <path id="save-inverted" className="inverted" d="m 2.5,2.5 0,13 2.1,0 0,-5 6.9,0 0,5 4,0 0,-13 z m 2,2 9,0 0,3 -9,0 z m 0.1,6 6.9,0 0,5 -6.9,0 z"/>
          <path id="save-close" className="normal" d="m 4.5,2.5 4.5,0 4.5,0 z m -2,0 0,8.2 3,-3.2 0.2,0 2.1,2 1.4,0 2,-2 -6.7,0 0,-5 z m 11,0 0,2.7 0.4,-0.4 1.6,0 0,-2.3 z M 15,7 8.5,13.2 5.5,10.4 4,12 l 4.5,4.5 8,-8 z m 0.5,5.3 -3,3 0,0.2 3,0 z m -13,1 0,2.2 2,0 0,-0.2 z"/>
          <path id="save-close-flat" className="normal" d="M 2,2 2,16 16,16 16,2 Z M 4,3 14,3 14,7 4,7 Z M 4.5,11.5 6,10 8,12 12.5,8 14,9.7 8,15 Z"/>
          <path id="save-close-inverted" className="inverted" d="m 2.5,2.5 0,13 13,0 0,-13 z m 2,1.9 9,0 0,3.1 -9,0 z m 0.7,7.3 0.7,-0.6 1.7,1.6 4.4,-3.1 0.6,0.8 -5.1,3.6 z"/>
          <path id="address" className="normal" d="m 2.5,15.5 13,0 c 0,-3.4 -2.2,-3 -5,-3 l 0,-1 C 12.5,10.4 12.7,9.4 13,8 13,7.7 13.5,7.4 13.5,7 13.5,6.6 13.1,6.3 13,6 12.8,5.6 12.9,3.7 12,3 10.4,1.8 7.56,1.8 6,3 5,3.7 5.1,5.6 5,6 4.8,6.3 4.5,6.6 4.5,7 c 0,0.3 0.4,0.6 0.5,1 0.2,1.5 0.5,2.3 2.5,3.5 l 0,1 c -2.5,0 -5,-0.5 -5,3 z"/>
          <path id="address-flat" className="normal" d="m 3,15 12,0 c 0,-3 -1.2,-3 -4,-3 l 0,-1 C 13,9.9 12.7,9.4 13,8 13,7.7 13.5,7.4 13.5,7 13.5,6.6 13.1,6.3 13,6 12.8,5.6 12.9,3.7 12,3 10.4,1.8 7.56,1.8 6,3 5,3.7 5.1,5.6 5,6 4.8,6.3 4.5,6.6 4.5,7 4.5,7.3 4.9,7.6 5,8 5.2,9.5 5,9.8 7,11 l 0,1 c -2.5,0 -4,0 -4,3 z"/>
          <path id="address-inverted" className="inverted" d="m 2.5,15.5 13,0 c 0,-3.4 -2.2,-3 -5,-3 l 0,-1 C 12.5,10.4 12.7,9.4 13,8 13,7.7 13.5,7.4 13.5,7 13.5,6.6 13.1,6.3 13,6 12.8,5.6 12.9,3.7 12,3 10.4,1.8 7.56,1.8 6,3 5,3.7 5.1,5.6 5,6 4.8,6.3 4.5,6.6 4.5,7 c 0,0.3 0.4,0.6 0.5,1 0.2,1.5 0.5,2.3 2.5,3.5 l 0,1 c -2.5,0 -5,-0.5 -5,3 z"/>
          <path id="security" className="normal" d="m 9,2.5 c -3,0 -5,1 -5.5,5 l 0,1 -1,0 0,7 13,0 0,-7 -1,0 0,-1 c 0,-4 -3,-5 -5,-5 z m 0,2 c 3,0 3.5,1 3.5,4 l -7,0 c 0,-3 1,-4 3.5,-4 z"/>
          <path id="security-flat" className="normal" d="M 9,3 C 6.25,3 4,4 4,7.5 L 4,9 3,9 3,15 15,15 15,9 14,9 14,7.5 C 14,4 11.5,3 9,3 Z m 0,2 c 3,0 3,1 3,4 L 6,9 C 6,6 6,5 9,5 Z"/>
          <path id="security-inverted" className="inverted" d="m 9,2.5 c -2.75,0 -5.5,0.75 -5.5,5 l 0,1 -1,0 0,7 13,0 0,-7 -1,0 0,-1 c 0,-4 -3,-5 -5.5,-5 z m 0,3 c 2.5,0 2.5,1 2.5,3 l -5,0 c 0,-2 0,-3 2.5,-3 z"/>
          <path id="attach" className="normal" d="m 13.5,2.5 0,10.5 -4,3.5 -4,-3.5 0,-11.5 6,0 0,10 -2,2 -2,-2 0,-8 2,0 0,6.5" />
          <path id="attach-inverted" className="inverted" d="m 11.5,3 2,0 0,10 L 9,16.5 4.5,13 l 0,-11.5 7,0 z m 0,0.5 0,8.5 -2.5,2 -2.5,-2 0,-8.5 3,0 0,7.5 L 9,11.4 8.5,11 8.5,4"/>
          <path id="status" className="normal" d="M 16.5,9 A 7.5,7.5 0 0 1 9,16.5 7.5,7.5 0 0 1 1.5,9 7.5,7.5 0 0 1 9,1.5 7.5,7.5 0 0 1 16.5,9 Z M 12.5,9 A 3.5,3.5 0 0 1 9,12.5 3.5,3.5 0 0 1 5.5,9 3.5,3.5 0 0 1 9,5.5 3.5,3.5 0 0 1 12.5,9 Z" />
          <path id="status-flat" className="normal" d="M 9 2 A 7 7 0 0 0 2 9 A 7 7 0 0 0 9 16 A 7 7 0 0 0 16 9 A 7 7 0 0 0 9 2 z M 9 5 A 4 4 0 0 1 13 9 A 4 4 0 0 1 9 13 A 4 4 0 0 1 5 9 A 4 4 0 0 1 9 5 z M 12,9 A 3,3 0 0 1 9,12 3,3 0 0 1 6,9 3,3 0 0 1 9,6 3,3 0 0 1 12,9 Z"/>
          <path id="status-inverted" className="inverted" d="M 16.5,9 A 7.5,7.5 0 0 1 9,16.5 7.5,7.5 0 0 1 1.5,9 7.5,7.5 0 0 1 9,1.5 7.5,7.5 0 0 1 16.5,9 Z M 12.5,9 A 3.5,3.5 0 0 1 9,12.5 3.5,3.5 0 0 1 5.5,9 3.5,3.5 0 0 1 9,5.5 3.5,3.5 0 0 1 12.5,9 Z"/>
          <path id="freebusy" className="normal" d="M 9,1.5 C 4.8,1.5 1.5,4.8 1.5,9 1.5,13.1 5.2,16.3 9,16.5 13,16.7 16.5,13.2 16.5,9 16.5,4.8 13.1,1.5 9,1.5 Z m 0,0 c 0.7,0 1.5,0 2.5,0.5 l 0,4.5 4,0 0,5 -6,0 0,5 C 4.5,16.3 1.5,12.5 1.5,9 1.5,5.3 4.2,1.6 9,1.5 Z m -0.5,2 1,0 0,5 4,0 0,1 -5,0 z"/>
          <path id="freebusy-flat" className="normal" d="M 9,2 C 4.8,2 2,4.8 2,9 c 0,4.1 4,7 7,7 4,0 7,-2.8 7,-7 C 16,4.8 13.1,2 9,2 Z m 0,1 c 0.7,0 1,0 2,0.3 l 0,3.7 3,0 0,4 -5,0 0,4 C 5,15 3,11 3,9 3,6 5,3 9,3 Z m -1,1 2,0 0,4 3,0 0,2 -5,0 z"/>
          <path id="freebusy-inverted" className="inverted" d="M 9,1.5 C 4.8,1.5 1.5,4.8 1.5,9 1.5,13.1 5.2,16.3 9,16.5 13,16.7 16.5,13.2 16.5,9 16.5,4.8 13.1,1.5 9,1.5 Z m -1.5,3.7 0,-1.7 3,0 0,4 4,0 0,3 -5,0 0,3 C 6.2,13.4 4.4,11.5 4.5,9 4.5,6.4 6,5.2 7.5,5.2 Z m 0,-1.7 3,0 0,4 4,0 0,3 -7,0 z"/>
          <path id="timezones" className="normal" d="M 9,1.5 C 4.8,1.5 1.5,4.8 1.5,9 1.5,13.1 5.2,16.3 9,16.5 13,16.7 16.5,13.2 16.5,9 16.5,4.8 13.1,1.5 9,1.5 Z M 7,3.8 6.3,4.6 6.3,5.7 7.1,6.8 7.8,8.2 9.4,8.3 10.4,6.1 9.8,3.8 11.3,1.9 c 1.5,0.5 3,1.5 3.8,3 l -3.4,2.5 1.6,-0.1 1.3,2 -0.3,1.8 -0.8,1.4 0.7,1.8 c -0.5,0.7 -1.5,1.3 -2.6,1.7 L 9.7,14 11.2,11.1 9.7,9.9 8.3,9 6.8,10.2 5.9,12.2 6,14 7,16 C 4.7,15.4 3.3,14 2.3,12.2 L 3.5,10.4 3.4,8.9 4.3,8 3.7,7.1 3.7,5.4 2.8,4.7 C 4,3 5.8,1.8 7.8,1.6 Z"/>
          <path id="timezones-flat" className="normal" d="M 9,2 C 4.8,2 2,4.8 2,9 c 0,4.1 3,7 7,7 4,0 7,-2.8 7,-7 C 16,4.8 13.1,2 9,2 Z m -2,2.3 -0.7,0.8 0,1.1 0.8,1.1 0.7,0.7 1.6,0 1,-1.4 -0.6,-2.3 1.4,-1 c 0,0 1,0 2.4,1.6 l -2.4,2.5 1.3,0.5 1.6,1.4 -0.3,1.8 -1,1.2 1,0.8 -2,1.4 -1.9,-1 L 11.5,11 8.3,9 5.9,11.8 6,13.1 7,14.5 C 6,14 4,13 3.9,12.2 L 4.7,10.5 3.9,8.4 4.8,7.5 4.2,6.6 4.2,5.4 4.3,4.8 C 5,4 6,3 8,3 Z"/>
          <path id="timezones-inverted" className="inverted" d="M 9,1.5 C 4.8,1.5 1.5,4.8 1.5,9 1.5,13.1 5.2,16.3 9,16.5 13,16.7 16.5,13.2 16.5,9 16.5,4.8 13.1,1.5 9,1.5 Z m -2.8,3.3 0.8,2.8 L 7.5,9 9.9,8.6 10,5.7 9.8,3.6 c 1.5,0.5 1.8,0.1 2.6,1.6 l -1,2 0.3,2.7 2.6,-0.7 C 14.2,12 12.6,13.4 10.2,14.3 L 11.1,13.3 11,11.2 10.1,8.7 7,9 5.8,13.4 8,14.5 c -2.3,-0.6 -3.5,-2 -4.5,-3.8 C 5.6,9.3 6,8 4.3,5.7 5.6,4.3 6,4 7.7,3.5 Z"/>
          <path id="decline" className="normal" d="M 2.5,5 5,2.5 l 4,4 4,-4 2.5,2.5 -4,4 4,4 -2.5,2.5 -4,-4 -4,4 -2.5,-2.5 4,-4 z"/>
          <path id="decline-flat" className="normal" d="M 3,5.5 5.5,3 9,6.5 12.5,3 15,5.5 11.5,9 15,12.5 12.5,15 9,11.5 5.5,15 3,12.5 6.5,9 Z"/>
          <path id="decline-inverted" className="inverted" d="M 2.5,5 5,2.5 l 4,4 4,-4 2.5,2.5 -4,4 4,4 -2.5,2.5 -4,-4 -4,4 -2.5,-2.5 4,-4 z"/>
          <path id="tentative" className="normal" d="m 8.2,6.5 -2.7,0 c 0,-1.4 0.5,-4 3.5,-4 2.3,0 4.4,1 4.5,4 0,2.8 -3,2.5 -3,5 l -3,0 C 7.4,8 10.3,8.5 10.2,6.5 10,5.5 9.3,5.5 9,5.5 c 0,0 -0.8,0 -0.8,1 z m -0.7,7 3,0 0,2 -3,0 z"/>
          <path id="tentative-flat" className="normal" d="M 8,7 6,7 C 6,5.6 6,3 9,3 c 2,0 4,0 4,3.5 0,3 -3,3 -3,5.5 L 8,12 C 8,8.5 11.1,8.5 11,6.5 11,5 10,5 9,5 8,5 8,6 8,7 Z m 0,6 2,0 0,2 -2,0 z"/>
          <path id="tentative-inverted" className="inverted" d="m 8.2,6.5 -2.7,0 c 0,-1.4 0.5,-4 3.5,-4 2.3,0 4.4,1 4.5,4 0,2.8 -3,2.5 -3,5 l -3,0 C 7.4,8 10.3,8.5 10.2,6.5 10,5.5 9.3,5.5 9,5.5 c 0,0 -0.8,0 -0.8,1 z m -0.7,7 3,0 0,2 -3,0 z"/>
        </svg>
      </div>
    );
  }
}

export default Icon;
