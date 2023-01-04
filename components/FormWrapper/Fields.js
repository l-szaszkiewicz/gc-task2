const fields = {
    text: [
        {
            name: 'name',
            placeholder: 'Imię i nazwisko:',
        },
        {
            name: 'company',
            placeholder: 'Firma:',
        },
        {
            name: 'phone',
            placeholder: 'Numer telefonu:',
        },
        {
            name: 'email',
            placeholder: 'E-mail:',
            type: 'email'
        }
    ],
    systems: [
        {
            value: 'b2b',
            labelTxt: 'B2B'
        },
        {
            value: 'b2c',
            labelTxt: 'B2C'
        }
    ],
    integrations: [
        {
            value: 'allegro',
            labelTxt: 'Allegro'
        },
        {
            value: 'kurier',
            labelTxt: 'Kurier'
        }
    ],
    erp: [
        {
            value: 'comarch_xl',
            labelTxt: 'Comarch XL'
        },
        {
            value: 'comarch_optima',
            labelTxt: 'Comarch Optima'
        },
        {
            value: 'subiekt_gt',
            labelTxt: 'Subiekt GT'
        },
        {
            value: 'wf_mag',
            labelTxt: 'WF-MAG'
        },
        {
            value: 'inny',
            labelTxt: 'Inny'
        }
    ],
    other: [
        {
            value: 'wms',
            labelTxt: 'WMS'
        },
        {
            value: 'migracja_danych',
            labelTxt: 'Migracja danych'
        },
        {
            value: 'sprzedaz_miedzynarodowa',
            labelTxt: 'Sprzedaż międzynarodowa'
        },
        {
            value: 'omnichannel',
            labelTxt: 'Omnichannel'
        },
        {
            value: 'multistore',
            labelTxt: 'Multistore'
        },
        {
            value: 'mobile_app',
            labelTxt: 'Aplikacja mobilna dla handlowców'
        }
    ],
    consent: 'Wyrażam zgodę na przetwarzanie przez GOcreate danych osobowych podanych w formularzu. Podanie danych jest dobrowolne. Administratorem podanych przez Pana/ Panią danych osobowych jest Gocreate - Artur Cimoch, Os.Słoneczne 14/32, 97-400 Bełchatów, NIP: 7691999233. Pana/Pani dane będą przetwarzane w celach związanych z udzieleniem odpowiedzi, przedstawieniem oferty usług Gocreate.pl oraz świadczeniem usług przez administratora danych. Przysługuje Panu/Pani prawo dostępu do treści swoich danych oraz ich poprawiania.'
}

export default fields
