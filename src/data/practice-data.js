const PRACTICE_DATA = [
    {
        name: `Saint Paul's`,
        image_data: {
            src: require('../assets/saint_pauls_logo.png'),
            height: 90
        },
        includes_raws: true,
        rows: [
            {
                name: 'Calculus Individual 2018',
                typeset: require('../tests/typeset/SPS_CAL_IND_18.pdf'),
                raw: require('../tests/raw/SPS_CAL_IND_18_RAW.pdf')
            },
            {
                name: 'Calculus Team 2018',
                typeset: require('../tests/typeset/SPS_CAL_TEA_18.pdf'),
                raw: require('../tests/raw/SPS_CAL_TEA_18_RAW.pdf')
            },
            {
                name: 'Interschool 2018',
                typeset: require('../tests/typeset/SPS_INT_18.pdf'),
                raw: require('../tests/raw/SPS_INT_18_RAW.pdf')
            },
            {
                name: 'Middle Individual 2018',
                typeset: require('../tests/typeset/SPS_MID_IND_18.pdf'),
                raw: require('../tests/raw/SPS_MID_IND_18_RAW.pdf')
            },
            {
                name: 'Pre-Algebra Individual 2018',
                typeset: require('../tests/typeset/SPS_PRALG_IND_18.pdf'),
                raw: require('../tests/raw/SPS_PRALG_IND_18_RAW.pdf')
            },
            {
                name: 'Algebra I Individual 2018',
                typeset: require('../tests/typeset/SPS_ALGI_IND_18.pdf'),
                raw: require('../tests/raw/SPS_ALGI_IND_18_RAW.pdf')
            },
            {
                name: 'Geometry Individual 2018',
                typeset: require('../tests/typeset/SPS_GEO_IND_18.pdf'),
                raw: require('../tests/raw/SPS_GEO_IND_18_RAW.pdf')
            },
            {
                name: 'Algebra II Individual 2018',
                typeset: require('../tests/typeset/SPS_ALGII_IND_18.pdf'),
                raw: require('../tests/raw/SPS_ALGII_IND_18_RAW.pdf')
            },
            {
                name: 'Advanced Mathematics Individual 2018',
                typeset: require('../tests/typeset/SPS_ADMAT_IND_18.pdf'),
                raw: require('../tests/raw/SPS_ADMAT_IND_18_RAW.pdf')
            },
            {
                name: 'Trigonometry Individual 2017',
                typeset: require('../tests/typeset/SPS_TRIG_IND_17.pdf'),
                raw: require('../tests/raw/SPS_TRIG_IND_17_RAW.pdf')
            }
        ]


    },
    {
        name: 'Benjamin Franklin',
        image_data: {
            src: require('../assets/benjamin_franklin_logo.png'),
            height: 50
        },
        includes_raws: true,
        rows: [
            {
                name: 'Pre-Calculus Individual 2019',
                typeset: require('../tests/typeset/BFS_PRCAL_IND_19.pdf'),
                raw: require('../tests/raw/BFS_PRCAL_IND_19_RAW.pdf')
            },
            {
                name: 'Pre-Calculus Team 2019',
                typeset: require('../tests/typeset/BFS_PRCAL_TEA_19.pdf'),
                raw: require('../tests/raw/BFS_PRCAL_TEA_19_RAW.pdf')
            },
            {
                name: 'Mu A Individual 2017',
                typeset: require('../tests/typeset/BFS_MUA_IND_17.pdf'),
                raw: require('../tests/raw/BFS_MUA_IND_17_RAW.pdf')
            },
            {
                name: 'Mu A Individual 2019',
                typeset: require('../tests/typeset/BFS_MUA_IND_19.pdf'),
                raw: require('../tests/raw/BFS_MUA_IND_19_RAW.pdf')
            },
            {
                name: 'Mu B Individual 2018',
                typeset: require('../tests/typeset/BFS_MUB_IND_18.pdf'),
                raw: require('../tests/raw/BFS_MUB_IND_18_RAW.pdf')
            },
        ]
    },
    {
        name: 'Catholic High',
        image_data: {
            src: require('../assets/catholic_high_logo.png'),
            height: 69
        },
        includes_raws: true,
        rows: [
            {
                name: 'Calculus AB Individual 2018',
                typeset: require('../tests/typeset/CHS_CALAB_IND_18.pdf'),
                raw: require('../tests/raw/CHS_CALAB_IND_18_RAW.pdf')
            },
            {
                name: 'Calculus AB Individual 2019',
                typeset: require('../tests/typeset/CHS_CALAB_IND_19.pdf'),
                raw: require('../tests/raw/CHS_CALAB_IND_19_RAW.pdf')
            },
            {
                name: 'Calculus BC Individual 2019',
                typeset: require('../tests/typeset/CHS_CALBC_IND_19.pdf'),
                raw: require('../tests/raw/CHS_CALBC_IND_19_RAW.pdf')
            },
            {
                name: 'Calculus AB Individual 2020',
                typeset: require('../tests/typeset/CHS_CALAB_IND_20.pdf'),
                raw: require('../tests/raw/CHS_CALAB_IND_20_RAW.pdf')
            },
            {
                name: 'Interschool 2019',
                typeset: '',
                raw: require('../tests/raw/CHS_INT_19_RAW.pdf')
            },
            {
                name: 'Interschool 2020',
                typeset: '',
                raw: require('../tests/raw/CHS_INT_20_RAW.pdf')
            },
        ]
    },
    {
        name: 'Haynes Academy',
        image_data: {
            src: require('../assets/haynes_academy_logo.png'),
            height: 80
        },
        includes_raws: false,
        rows: [
            {
                name: 'Calculus AB Individual 2019',
                test: require('../tests/HAY_CALAB_IND_19.pdf')
            },
            {
                name: 'Calculus BC Individual 2019',
                test: require('../tests/HAY_CALBC_IND_19.pdf')
            },
            {
                name: 'Mu Team Test 2019',
                test: require('../tests/HAY_MU_TEA_19.pdf')
            },
            {
                name: 'Calculus Ciphering 2019',
                test: require('../tests/HAY_CAL_CIPH_19.pdf')
            },
            {
                name: 'Calculus Math Bowl 2019',
                test: require('../tests/HAY_CAL_MAT_19.pdf')
            },
            {
                name: 'Advanced Mathematics Ciphering 2019',
                test: require('../tests/HAY_ADMAT_CIPH_19.pdf')
            },
            {
                name: 'Advanced Mathematics Individual 2019',
                test: require('../tests/HAY_ADMAT_IND_19.pdf')
            },
            {
                name: 'Algebra I Individual 2019',
                test: require('../tests/HAY_ALGI_IND_19.pdf')
            },
            {
                name: 'Algebra II Ciphering 2019',
                test: require('../tests/HAY_ALGII_CIPH_19.pdf')
            },
            {
                name: 'Algebra II Individual 2019',
                test: require('../tests/HAY_ALGII_IND_19.pdf')
            },
            {
                name: 'Algebra II Math Bowl 2019',
                test: require('../tests/HAY_ALGII_MAT_19.pdf')
            },
            {
                name: 'Pre-Calculus Math Bowl 2019',
                test: require('../tests/HAY_PRCAL_MAT_19.pdf')
            },
            {
                name: 'Geometry Individual 2019',
                test: require('../tests/HAY_GEO_IND_19.pdf')
            },
            {
                name: 'Theta Team 2019',
                test: require('../tests/HAY_THE_TEA_19.pdf')
            },
            {
                name: 'Alpha Team 2019',
                test: require('../tests/HAY_ALP_TEA_19.pdf')
            },
            {
                name: 'Interschool 2019',
                test: require('../tests/HAY_INT_19.pdf')
            }
        ]
    },
    {
        name: 'Brother Martin',
        image_data: {
            src: require('../assets/brother_martin_logo.png'),
            height: 55
        },
        includes_raws: true,
        rows: [
            {
                name: 'Calculus AB Individual 2018',
                typeset: require('../tests/typeset/BMS_CALAB_IND_18.pdf'),
                raw: require('../tests/raw/BMS_CALAB_IND_18_RAW.pdf')
            },
            {
                name: 'Calculus BC Individual 2019',
                typeset: require('../tests/typeset/BMS_CALBC_IND_19.pdf'),
                raw: require('../tests/raw/BMS_CALBC_IND_19_RAW.pdf')
            },
            {
                name: 'Calculus AB Individual 2020',
                typeset: require('../tests/typeset/BMS_CALAB_IND_20.pdf'),
                raw: require('../tests/raw/BMS_CALAB_IND_20_RAW.pdf')
            },
            {
                name: 'Calculus AB Team 2020',
                typeset: '',
                raw: require('../tests/raw/BMS_CALAB_TEA_20_RAW.pdf')
            },
            {
                name: 'Interschool 2020',
                typeset: '',
                raw: require('../tests/raw/BMS_INT_20_RAW.pdf')
            },
        ]
    },
    {
        name: 'State Convention',
        image_data: {
            src: require('../assets/louisiana_state_logo.png'),
            height: 60
        },
        includes_raws: true,
        rows: [
            {
                name: 'Mu A Individual 2018',
                typeset: require('../tests/typeset/LAS_MUA_IND_18.pdf'),
                raw: require('../tests/raw/LAS_MUA_IND_18_RAW.pdf')
            },
            {
                name: 'Mu A Individual 2017',
                typeset: 'http://www.lamao.org/Content/Public/Tests/2017/2017%20Mu%20A%20Individual.pdf',
                raw: ''
            },
            {
                name: 'Mu B Individual 2017',
                typeset: 'http://www.lamao.org/Content/Public/Tests/2017/2017%20Mu%20B%20Individual.pdf',
                raw: ''
            },
            {
                name: 'Mu A Individual 2012',
                typeset: 'http://www.lamao.org/Content/Public/Tests/2012/2012%20Mu%20A%20Individual.pdf',
                raw: ''
            },
            {
                name: 'Mu B Individual 2012',
                typeset: require('../tests/typeset/LAS_MUB_IND_12.pdf'),
                raw: 'http://www.lamao.org/Content/Public/Tests/2012/2012%20Mu%20B%20Individual.pdf'
            },
            {
                name: 'Mu A Individual 2010',
                typeset: 'http://www.lamao.org/Content/Public/Tests/2010/2010%20Mu%20A%20Individual.pdf',
                raw: ''
            },
            {
                name: 'Mu B Individual 2010',
                typeset: 'http://www.lamao.org/Content/Public/Tests/2010/2010%20Mu%20B%20Individual.pdf',
                raw: ''
            },
            {
                name: 'Mu B Area Test 2010',
                typeset: 'http://www.lamao.org/Content/Public/Tests/2010/2010%20Mu%20B%20Topic.pdf',
                raw: ''
            },
            {
                name: 'Integration Area Test 2010',
                typeset: require('../tests/typeset/LAS_INTEG_ARE_10.pdf'),
                raw: 'http://www.lamao.org/Content/Public/Tests/2010/2010%20Mu%20Topic%20Integration.pdf'
            },
            {
                name: 'Differentiation Area Test 2010',
                typeset: 'http://www.lamao.org/Content/Public/Tests/2010/2010%20Mu%20Topic%20Differentiation.pdf',
                raw: ''
            },
            {
                name: 'Scholarship Test 2019',
                typeset: require('../tests/typeset/LAS_SCHLR_19.pdf'),
                raw: require('../tests/raw/LAS_SCHLR_19_RAW.pdf')
            },
            {
                name: 'Scholarship Test 2017',
                typeset: require('../tests/LAS_SCHLR_2017.pdf'),
                raw: ''
            },
            {
                name: 'Scholarship Test 2012',
                typeset: require('../tests/LAS_SCHLR_2012.pdf'),
                raw: ''
            },
            {
                name: 'Scholarship Test 2010',
                typeset: require('../tests/LAS_SCHLR_2010.pdf'),
                raw: ''
            },
        ]
    },
    {
        name: `Kha's Mock Tests`,
        image_data: {
            src: require('../assets/kha_mock_test.png'),
            height: 45
        },
        includes_raws: false,
        rows: [
            {
                name: 'Calculus AB Ciphering',
                test: require('../tests/Kha_s_Mock_Ciphering_AB.pdf')
            },
            {
                name: 'Calculus BC Ciphering',
                test: require('../tests/Kha_s_Mock_Ciphering_BC.pdf')
            },
            {
                name: 'Calculus AB Ciphering Set II',
                test: require('../tests/Kha_s_Mock_Ciphering_AB_Set_II.pdf')
            },
        ]
    },
]

export default PRACTICE_DATA;