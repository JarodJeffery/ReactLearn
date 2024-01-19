vite.config.js use this to get localhost port 3000 {
  import { defineConfig } from 'vite'
  import dns from 'dns'
  import react from '@vitejs/plugin-react-swc'
  
  dns.setDefaultResultOrder('verbatim')
  
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    server: {
      host: 'localhost',
      port: 3000
    }
  })
}


ref vs state

ref change does not re-execute component like state
can uses refs for direct DOM access


use state for values reflected in UI

useImperativeHandle(ref , () =>{  //exposes functions to outside components where it is called
    return {
        open(){
            dialog.current.showModal();
        }
    };
});

portals

allows redering in diffrent place in document

return CreatePortal (<> Ktml/React </>, document.getElementById());