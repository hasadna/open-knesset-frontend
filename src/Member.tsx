import React from 'react'

type dataArray = string[]

type SelectProps = {
  data: dataArray[];
};

export default function Member({data}: SelectProps) {
  
  
  
  return (
    <div>
      {data.map((item:dataArray, i:number) => 
      <div key={i}>
        <div>{item[2]}     :<b>{item[1]}</b></div>
      </div>
      )
      
      }
    </div>
  )
}
