const baseApi = "https://datagroups.fundamentos-29.repl.co/"


async function datosName() {
const data =  await fetch(baseApi)
const res =  await data.json()



return res
	
}

async function datosPrincipal() {
	const promesa1 = await datosName()
	console.log(promesa1)
	pintGrupod(promesa1)
	
	
	
}

datosPrincipal()


function pintGrupod(grupos) {
	
	let container12 = document.querySelector(".container1")
	
	let guardarInfo = ""
	for (const grupo of grupos ) {
	guardarInfo +=  ` <div class = "grupo" style = "border:5px solid ${grupo.color} ">
    <h2 style = "--stylo-color:${grupo.color}">${grupo.title}</h2>
	${pintSubgrupo(grupo.subGroups,grupo.color)} 
	
</div>
	`
	//console.log(grupo.subGroups)
	}

	container12.innerHTML = guardarInfo 


	

}

function pintSubgrupo(subgrupo , color) {
	
	let informacionSub = "" 

	for (const subgrupo1 of subgrupo) {
		informacionSub +=  `
		
		<div class = "subgrupo" style = "border:5px solid ${color} ">
		<h3>${subgrupo1.title}</h3>
		<div class = "contenedor_participante">
		${participantes(subgrupo1.participants, color)}
		</div>
		
		</div>

		
		`
		

		
		
	}
	return informacionSub
	
}


function participantes(participants , color) {

	let informacion = ""
	for (const participante of participants) {
		informacion +=  `
		
	<div class = "participantes"style = "border:5px solid ${color} ">
	<h3>${participante.name}</h3>

	<p>${ participante.email}</p>
	
	</div>
	
	`
	}
	
	
return  informacion
	
}
