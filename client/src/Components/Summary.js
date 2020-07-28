import React, { Component } from 'react'

export class Summary extends Component {
    componentDidMount(){
        var divElement = document.getElementById('viz1595972223813');
        var vizElement = divElement.getElementsByTagName('object')[0];
        if ( divElement.offsetWidth > 800 ) { 
            vizElement.style.width='100%';
            vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
        } else if ( divElement.offsetWidth > 500 ) { 
            vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
        } else { 
            vizElement.style.width='100%';vizElement.style.height='727px';
        }
        var scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        vizElement.parentNode.insertBefore(scriptElement, vizElement);       
        
    }
    render() {
        return (
            <div className = {'container'} style = {{borderBottomStyle: 'solid', borderColor: 'black', maxWidth : '100%', minWidth : '100%'}}>
                <div className = 'row'>
                    <div className = {'col-sm'}>
                        <div class='tableauPlaceholder' id='viz1595972223813' style={{position: 'relative'}}><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Wa&#47;WashingtonStateCoronavirusCases&#47;CoronavirusCases&#47;1_rss.png' style={{border: 'none'}} /></a></noscript><object class='tableauViz'  style={{display: 'none'}}><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='WashingtonStateCoronavirusCases&#47;CoronavirusCases' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Wa&#47;WashingtonStateCoronavirusCases&#47;CoronavirusCases&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en' /><param name='filter' value='publish=yes' /></object></div>
                    </div>
                    <div className = {'col-sm'}>Advise</div>
                </div>
            </div>
        )
    }
}

export default Summary
