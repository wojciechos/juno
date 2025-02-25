"use strict";(self.webpackChunkjuno_docs=self.webpackChunkjuno_docs||[]).push([[4957],{9355:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>j,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var i=r(4848),d=r(8453);function s(e){const n={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Config Option"}),(0,i.jsx)(n.th,{children:"Default Value"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"cn-core-contract-address"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Custom network core contract address"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"cn-feeder-url"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Custom network feeder URL"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"cn-gateway-url"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Custom network gateway URL"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"cn-l1-chain-id"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Custom network L1 chain id"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"cn-l2-chain-id"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Custom network L2 chain id"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"cn-name"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Custom network name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"cn-unverifiable-range"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"[]"})}),(0,i.jsxs)(n.td,{children:["Custom network range of blocks to skip hash verifications (e.g. ",(0,i.jsx)(n.code,{children:"0,100"}),")"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"colour"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsxs)(n.td,{children:["Use ",(0,i.jsx)(n.code,{children:"--colour=false"})," command to disable colourized outputs (ANSI Escape Codes)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"config"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"The YAML configuration file"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"db-cache-size"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1024"})}),(0,i.jsx)(n.td,{children:"Determines the amount of memory (in megabytes) allocated for caching data in the database"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"db-max-handles"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1024"})}),(0,i.jsx)(n.td,{children:"A soft limit on the number of open files that can be used by the DB"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"db-path"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"juno"})}),(0,i.jsx)(n.td,{children:"Location of the database files"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"disable-l1-verification"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"Disables L1 verification since an Ethereum node is not provided"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"eth-node"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"WebSocket endpoint of the Ethereum node. To verify the correctness of the L2 chain, Juno must connect to an Ethereum node and parse events in the Starknet contract"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"grpc"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"Enable the HTTP gRPC server on the default port"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"grpc-host"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"localhost"})}),(0,i.jsx)(n.td,{children:"The interface on which the gRPC server will listen for requests"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"grpc-port"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"6064"})}),(0,i.jsx)(n.td,{children:"The port on which the gRPC server will listen for requests"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"gw-api-key"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"API key for gateway endpoints to avoid throttling"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"gw-timeout"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"5"})}),(0,i.jsx)(n.td,{children:"Timeout for requests made to the gateway"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"http"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"Enables the HTTP RPC server on the default port and interface"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"http-host"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"localhost"})}),(0,i.jsx)(n.td,{children:"The interface on which the HTTP RPC server will listen for requests"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"http-port"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"6060"})}),(0,i.jsx)(n.td,{children:"The port on which the HTTP server will listen for requests"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"log-level"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"info"})}),(0,i.jsx)(n.td,{children:"Options: trace, debug, info, warn, error"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"max-vm-queue"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"2 * max-vms"})}),(0,i.jsx)(n.td,{children:"Maximum number for requests to queue after reaching max-vms before starting to reject incoming requests"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"max-vms"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"3 * CPU Cores"})}),(0,i.jsx)(n.td,{children:"Maximum number for VM instances to be used for RPC calls concurrently"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"metrics"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"Enables the Prometheus metrics endpoint on the default port"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"metrics-host"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"localhost"})}),(0,i.jsx)(n.td,{children:"The interface on which the Prometheus endpoint will listen for requests"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"metrics-port"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"9090"})}),(0,i.jsx)(n.td,{children:"The port on which the Prometheus endpoint will listen for requests"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"network"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"mainnet"})}),(0,i.jsx)(n.td,{children:"Options: mainnet, sepolia, sepolia-integration"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"p2p"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"EXPERIMENTAL: Enables p2p server"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"p2p-addr"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"EXPERIMENTAL: Specify p2p listening source address as multiaddr.  Example: /ip4/0.0.0.0/tcp/7777"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"p2p-feeder-node"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"EXPERIMENTAL: Run juno as a feeder node which will only sync from feeder gateway and gossip the new blocks to the network"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"p2p-peers"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"EXPERIMENTAL: Specify list of p2p peers split by a comma. These peers can be either Feeder or regular nodes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"p2p-private-key"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"EXPERIMENTAL: Hexadecimal representation of a private key on the Ed25519 elliptic curve"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"p2p-public-addr"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"EXPERIMENTAL: Specify p2p public address as multiaddr.  Example: /ip4/35.243.XXX.XXX/tcp/7777"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"pending-poll-interval"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"5"})}),(0,i.jsx)(n.td,{children:"Sets how frequently pending block will be updated (0s will disable fetching of pending block)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"plugin-path"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Path to the plugin .so file"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"pprof"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"Enables the pprof endpoint on the default port"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"pprof-host"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"localhost"})}),(0,i.jsx)(n.td,{children:"The interface on which the pprof HTTP server will listen for requests"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"pprof-port"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"6062"})}),(0,i.jsx)(n.td,{children:"The port on which the pprof HTTP server will listen for requests"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"remote-db"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"gRPC URL of a remote Juno node"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rpc-call-max-steps"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"4000000"})}),(0,i.jsx)(n.td,{children:"Maximum number of steps to be executed in starknet_call requests. The upper limit is 4 million steps, and any higher value will still be capped at 4 million"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rpc-cors-enable"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"Enable CORS on RPC endpoints"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rpc-max-block-scan"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"18446744073709551615"})}),(0,i.jsx)(n.td,{children:"Maximum number of blocks scanned in single starknet_getEvents call"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"versioned-constants-file"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Use custom versioned constants from provided file"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ws"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"Enables the WebSocket RPC server on the default port"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ws-host"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"localhost"})}),(0,i.jsx)(n.td,{children:"The interface on which the WebSocket RPC server will listen for requests"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ws-port"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"6061"})}),(0,i.jsx)(n.td,{children:"The port on which the WebSocket server will listen for requests"})]})]})]})}function t(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}const c={title:"Configuring Juno"},l="Configuring Juno :gear:",o={id:"configuring",title:"Configuring Juno",description:"Juno can be configured using several methods, with the following order of precedence:",source:"@site/versioned_docs/version-0.12.4/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/0.12.4/configuring",draft:!1,unlisted:!1,tags:[],version:"0.12.4",frontMatter:{title:"Configuring Juno"},sidebar:"main",previous:{title:"Running Juno",permalink:"/0.12.4/running-juno"},next:{title:"Juno Plugins",permalink:"/0.12.4/plugins"}},h={},a=[{value:"Command line params",id:"command-line-params",level:2},{value:"Environment variables",id:"environment-variables",level:2},{value:"Configuration file",id:"configuration-file",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Subcommands",id:"subcommands",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"configuring-juno-gear",children:["Configuring Juno ","\u2699"]}),"\n",(0,i.jsx)(n.p,{children:"Juno can be configured using several methods, with the following order of precedence:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#command-line-params",children:"Command line parameters (flags)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#environment-variables",children:"Environment variables"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#configuration-file",children:"Configuration file"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"command-line-params",children:"Command line params"}),"\n",(0,i.jsxs)(n.p,{children:["Juno can be configured directly on the command line by prefixing ",(0,i.jsx)(n.code,{children:"--"})," to each option name:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./build/juno --http --http-port 6060 --http-host 0.0.0.0\n"})}),"\n",(0,i.jsx)(n.p,{children:"When using Docker, append the command line parameters after the image name to configure Juno:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run nethermind/juno --http --http-port 6060 --http-host 0.0.0.0\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Command line parameters override ",(0,i.jsx)(n.a,{href:"#environment-variables",children:"environment variables"})," and ",(0,i.jsx)(n.a,{href:"#configuration-file",children:"configuration file"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,i.jsxs)(n.p,{children:["Juno can be configured through environment variables by prefixing the variable names with ",(0,i.jsx)(n.code,{children:"JUNO_"})," and using the configuration options in ",(0,i.jsx)(n.a,{href:"https://en.wiktionary.org/wiki/screaming_snake_case",children:"SCREAMING_SNAKE_CASE"})," format."]}),"\n",(0,i.jsxs)(n.p,{children:["To set the ",(0,i.jsx)(n.code,{children:"http"}),", ",(0,i.jsx)(n.code,{children:"http-port"}),", and ",(0,i.jsx)(n.code,{children:"http-host"})," configurations, Juno should be run in this format:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"JUNO_HTTP=true JUNO_HTTP_PORT=6060 JUNO_HTTP_HOST=0.0.0.0 ./build/juno\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When using Docker, start Juno using the ",(0,i.jsx)(n.code,{children:"-e"})," command option:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'docker run \\\n  -e "JUNO_HTTP=true JUNO_HTTP_PORT=6060 JUNO_HTTP_HOST=0.0.0.0" \\\n  nethermind/juno\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Environment variables rank second in configuration precedence. ",(0,i.jsx)(n.a,{href:"#command-line-params",children:"Command line parameters"})," override environment variables."]})}),"\n",(0,i.jsx)(n.h2,{id:"configuration-file",children:"Configuration file"}),"\n",(0,i.jsxs)(n.p,{children:["Juno can be configured using a ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/YAML",children:"YAML"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="Sample YAML File" showLineNumbers',children:"log-level: info\nnetwork: mainnet\nhttp: true\nhttp-port: 6060\nmetrics: true\nmetrics-port: 9090\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To run Juno with a configuration file, use the ",(0,i.jsx)(n.code,{children:"config"})," option to specify the path of the configuration file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Standalone binary\n./build/juno --config <CONFIG FILE PATH>\n\n# Docker container\ndocker run nethermind/juno --config <CONFIG FILE PATH>\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["By default, Juno looks for the configuration file in the ",(0,i.jsx)(n.code,{children:"$XDG_CONFIG_HOME"})," directory."]})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Configuration file rank third in configuration precedence. ",(0,i.jsx)(n.a,{href:"#command-line-params",children:"Command line parameters"})," and ",(0,i.jsx)(n.a,{href:"#environment-variables",children:"environment variables"})," override configuration file."]})}),"\n",(0,i.jsx)(n.h2,{id:"configuration-options",children:"Configuration options"}),"\n",(0,i.jsxs)(n.p,{children:["To list all available command line options, you can use the ",(0,i.jsx)(n.code,{children:"--help"})," parameter:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Standalone binary\n./build/juno --help\n\n# Docker container\ndocker run nethermind/juno --help\n"})}),"\n",(0,i.jsx)(n.p,{children:"Below is a list of all configuration options available in Juno, along with their default values and descriptions:"}),"\n","\n",(0,i.jsx)(t,{}),"\n",(0,i.jsx)(n.h2,{id:"subcommands",children:"Subcommands"}),"\n",(0,i.jsx)(n.p,{children:"Juno provides several subcommands to perform specific tasks or operations. Here are the available ones:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"genp2pkeypair"}),": Generate a private key pair for p2p."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"db"}),": Perform database-related operations","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"db info"}),": Retrieve information about the database."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"db size"}),": Calculate database size information for each data type."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"db revert"}),": Reverts the database to a specific block number."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To use a subcommand, append it when running Juno:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Running a subcommand\n./build/juno <subcommand>\n\n# Running the genp2pkeypair subcommand\n./build/juno genp2pkeypair\n\n# Running the db info subcommand\n./build/juno db info\n"})})]})}function j(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var i=r(6540);const d={},s=i.createContext(d);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);