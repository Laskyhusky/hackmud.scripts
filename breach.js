function(context, args)
{
	
	var t = args.t
	var r = t.call({})
	var q = ["6hh8xw","cmppiq","sa23uw","tvfkyq","uphlaw","vc2c7q","xwz7ja"]
	var u = "not the"
	var p = ["unlock", "open", "release"]
	var pr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
	var c = ["red", "orange", "yellow", "green", "lime", "blue", "cyan", "purple"]
	var z = #fs.lore.data_check({ i_understand_that_spoilers_will_make_the_game_less_fun:"true" })

	while (!r.includes("BINMAT")) {
		
		// EZ_21 Lock
		if(r.indexOf("`NEZ_21`") > -1) {
			
			for (let i = 0; i < 3; i++) {
				args.EZ_21 = p[i]
				r = t.call(args)

				if(!r.includes(u)) {
					break
				}
			}
		}

		// EZ_35 Lock
		if(r.indexOf("`NEZ_35`") > -1) {	
			
			for (let i = 0; i < 3; i++) {
				args.EZ_35 = p[i]
				r = t.call(args)

				if(!r.includes(u)) {
					break
				}
			}

			for (let j = 1; j < 10; j++) {
				args.digit = j
				r = t.call(args)

				if(!r.includes("digit")) {
					break
				}
			}
		}

		// EZ_40 lock
		if(r.indexOf("`NEZ_40`") > -1) {
			for (let i = 0; i < 3; i++) {
				args.EZ_40 = p[i]
				r = t.call(args)

				if(!r.includes(u)) {
					break
				}
			}

			for (let j = 0; j < 25; j++) {
				args.ez_prime = pr[j]
				r = t.call(args)

				if(!r.includes(u)) {
					break
				}
			}
		}

		// c001 lock
		if(r.indexOf("`Nc001`") > -1) {
			for (let i = 0; i < 8; i++) {
				args.c001 = c[i]
				r = t.call(args)

				if(!r.includes(u)) {
					args.color_digit = c[i].length
					r = t.call(args)
					break
				}
			}
		}

		// c002 lock
		if(r.indexOf("`Nc002`") > -1) {
			for (let i = 0; i < 8; i++) {
				args.c002 = c[i]
				r = t.call(args)

				if(!r.includes(u)) {
					break
				}
			}
			for (let j = 0; j < 8; j++) {
				args.c002_complement = c[j]
				r = t.call(args)

				if(!r.includes(u)) {
					break
				}
			}
		}	

		// c003 Lock
		if(r.indexOf("`Nc003`") > -1) {
			for (let i = 0; i < 8; i++) {
				args.c003 = c[i]
				r = t.call(args)

				if(!r.includes(u)) {
					break
				}
			}
			for (let j = 0; j < 8; j++) {
				args.c003_triad_1 = c[j]
				r = t.call(args)

				if(!r.includes(u)) {
					break
				}
			}
			for (let j = 0; j < 8; j++) {
				args.c003_triad_2 = c[j]
				r = t.call(args)

				if(!r.includes(u)) {
					break
				}
			}
		}

		// l0cket lock
		if(r.indexOf("`Nl0cket`") > -1) {
			for (let i = 0; i < 7; i++) {
				args.l0cket = q[i]
				r = t.call(args)

				if(!r.includes(u)) {

					break
				}
			}
		}

		// DATA_CHECK
		if(r.indexOf("`NDATA_CHECK`") > -1) {
			args.DATA_CHECK = ""
			r = t.call(args)
			let s = r.split("\n")
			let p = z.split("\n")
			let i
			let j

			for(i = 0; i < 3; i++) {
				for(j = 0; j < p.length; j++) {
					let check = p[j]
					
					if(check.trim() === s[i]) {
						let res = p[j+1]
						res = res.trim()
						res = res.replace("`L","")
						res = res.replace("`","")
						args.DATA_CHECK += res
						break
						
					}
				}
			r = t.call(args)	
			}
		}
	} 

	return { 

		ok: true, 
		msg: r 
	}

}