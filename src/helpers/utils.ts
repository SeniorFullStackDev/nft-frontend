import config from "api/config";

export const getPriceData = (productDetail: any, _selectedOption:any, over_percentage?: number):{price, gst} => {
    if (productDetail === null) return {price:0, gst:0};
    let base_price = productDetail.base_price || 0;
    let surcharge = 0;

    // append surcharges for all attributes
    for (const key in _selectedOption) {
        // eslint-disable-next-line no-prototype-builtins
        if (_selectedOption.hasOwnProperty(key)) {
            // your logic here
            const val = _selectedOption[key];
            if (val.selection !== null && val.selection.indexOf('(+$') !== -1) {
                const ele_surcharge = val.selection.match(/\(\+\$(\d+)/)[1];

                surcharge = parseFloat(ele_surcharge) * (1 + (over_percentage?over_percentage:50) / 100);
                console.log("surcharge --->", val.selection, ele_surcharge, surcharge, over_percentage);
                base_price += surcharge;
            }
        }
    }

    console.log("base price --->", base_price);
    
    const gst = base_price * 0.1;
    const price = base_price + gst;

    return { price, gst }
}

export const filterAssetLink = (link:string) => {
    if(link){
        if(!link.includes(config.host)){
            link = config.host + link;
        }
    }
    return link;
}