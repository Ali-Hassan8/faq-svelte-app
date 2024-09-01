import { writable } from 'svelte/store';

const store_ = writable({state:{sidebarOpen:true,chatOpen:false,languageCode:language}});

export const store = {
    subscribe: store_.subscribe,
    setItem: (item) =>{
        store_.update(i => { 
            i = item
            return item; 
        });  
        
    }, 
    toggleSidebar:()=>{
        store_.update(i => { 
            i.state.sidebarOpen = !i.state.sidebarOpen;
            return i; 
        })
    }, 
    toggleChat:()=>{
        store_.update(i => { 
            i.state.chatOpen = !i.state.chatOpen;
            return i; 
        })
    }
    
    
};

export const searchVal = writable('');

