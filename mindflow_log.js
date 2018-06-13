require("mindflow")
MindFlow.node({
	about: {
		name: "log",
		description: "Just output data to teh console and continue life"
	},
	
	format: {
		
	},
	
	execute: function({ data, input }) {
		// defaults
			input = Object.assign(
				{
					beautify: false,
					content: data,
					output_console: true,
					output_file: false,
					prepend: "",
					append: ""
				},
				input
			)
		
		if(input.beautify == true)
			input.content = JSON.stringify(input.content, true, 4)
			
		//if(input.output_file)
	
		if(input.output_console)
			console.log(input.content)
		
		return data
	}
})
