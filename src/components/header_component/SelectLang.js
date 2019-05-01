import React, { Component } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const Styles = styled.div`
.SelectLangBox{
	margin-top: 35px;
	height:40px;
}


`;


const options = [
  { value: 'eng', label: 'English' },
  { value: 'ua', label: 'Ukraine' },
  { value: 'rus', label: 'Russian' }
]



export const  SelectLang = () => (
<Styles>
<div className="SelectLangBox">
 <Select  options={ options } />
</div>
</Styles>
);


