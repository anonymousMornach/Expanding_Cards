const panel_item = document.querySelectorAll('.panel_item');

panel_item.forEach((panel) =>{
	panel.addEventListener('click', () => {
		removeActivePanel();
		panel.classList.add('active_panel');
	})	
})

function removeActivePanel(){
	panel_item.forEach((panel) => {
		panel.classList.remove('active_panel');
	})
}
