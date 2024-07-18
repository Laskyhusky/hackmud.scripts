function(context, args)
{
	
	

		
	let r1 = #hs.accts.transactions({from:"l4sk"})
			let r2 = #hs.accts.transactions({to:"l4sk"})

			let t = (r2[0].amount+r2[1].amount+r2[2].amount+r2[3].amount+r2[4].amount)-(r1[0].amount+r1[1].amount+r1[2].amount+r1[3].amount+r1[4].amount)





	return { 

		ok: false, 
		net: t

	}
}

