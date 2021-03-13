import React from 'react';
import usePetsApi from "../hooks/usePetsApi";
import PetsList from "./PetsList";
import '../stylesheets/ViewPage.css'

export default function ViewPage() {
  const pets = usePetsApi({
    path: '/pet/findByStatus',
    params: {
      status: 'available'
    },
    verb: 'GET'
  });


  return <div className="viewPage">
    {pets && (
      <>
        <h2>Here are the existing pets:</h2>
        <PetsList pets={pets} />
      </>
    ) || (
      <p className="loading">Loading...</p>
    )}
  </div>
}