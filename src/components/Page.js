import React from 'react';
import Header from './Header';
import Photos from './../containers/Photos';
import DetailsPhoto from './../containers/DetailsPhoto';

const Page = () => (
  <div className="page" >
    <Header />
    <hr className="hr" />
    <Photos />
    <hr className="hr" />
    <DetailsPhoto /> 
  </div>
)
export default Page;