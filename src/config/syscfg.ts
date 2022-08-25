export interface ISysCfgBModItem {
    name: string
    enable: boolean
}

export interface ISysCfg {
    baseUrl: string
    bmodNames: ISysCfgBModItem[]
}

const iSysCfg: ISysCfg = {
    baseUrl: "http://192.168.101.41:8080",
    bmodNames: [{
        name: 'blog',
        enable: true,
    }],
}

export default iSysCfg