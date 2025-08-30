import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Buttons from "./Buttons";




//create your first component
const Home = () => {
	const iniColors = ["danger", "warning", "success"]
	const [labelBtn, setlabelBtn] = useState(true)
	const [arrColors, setArrcolors] = useState(iniColors)  //inicializamos una variable de estado para poder modificar el array original de colores y agregar el color purpura
	const [select, setSelect] = useState(0)

	const [index, setIndex] = useState()
	const handleChangeLigth = (i) => {

		setIndex(i)
	}

	//funcion para seleccionar y alternar los colores con click en el boton 
	const handleButtons = () => {
		
		select < arrColors.length-1 ? setSelect(select + 1) : setSelect(0) 
		handleChangeLigth(select) //se reusa la funcion handleChangeLigth y le pasamos por parametro el valor de la variable select (un acumulador) para cambiar el indice

	}

	//funcion para agregar y quitar el color nuevo al array
	const handleAddColor = () => {
		if (labelBtn){
			setArrcolors([...arrColors, "purple"])
			setlabelBtn(false)
		} else {
			  setArrcolors(
                arrColors.filter(e =>
                  e !== "purple"
                )
              );
			  setlabelBtn(true)
		}
			


	}


	return (
		<div className="text-center">
			<div className="d-flex justify-content-center my-5">
				<div className="d-inline-flex flex-column align-items-center bg-dark p-4 rounded div-size">
					{arrColors.map((e, i) => (
						<div onClick={() => handleChangeLigth(i)} key={i} className={`bg-${e} rounded-circle mb-3 p-4 ${index === i ? "select" : ""}`} ></div>
					))}

				</div>
			</div>
			<div className="d-grid gap-2 d-md-block">
				<Buttons onSelect={handleButtons} color={"danger"} label={'Cambiar Color'} />
				<Buttons onSelect={handleAddColor} color={"success"} label={ labelBtn ? 'Agregar Color' : 'Quitar Color'} />	
			</div>
		</div>
	);
};


export default Home;