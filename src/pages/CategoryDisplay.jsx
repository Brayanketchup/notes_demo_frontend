import React from 'react'
import { useParams } from 'react-router-dom';

export const CategoryDisplay = () => {
      const { category } = useParams();
  return (
    <div>CategoryDisplay with this category</div>
  )
}
