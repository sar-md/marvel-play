let dados = [
    {
        titulo : "Homem de Ferro (2008)",
        sinopse : "Tony Stark, um bilionário industrial, é sequestrado e forçado a construir uma arma poderosa. Ao escapar, ele constrói sua própria armadura e se torna o super-herói Homem de Ferro.",
        link : "https://www.disneyplus.com/pt-br/movies/homem-de-ferro/6aM2a8mZATiu",
        tags : "genio bilionario playboy filantropo"
    },
    {
        titulo : "O Incrível Hulk (2008)",
        sinopse : "Bruce Banner, um cientista que sofre um acidente em um laboratório, se transforma no monstro Hulk quando fica com raiva.",
        link : "https://www.primevideo.com/-/pt/detail/O-Incr%C3%ADvel-Hulk/0TISNLS9TOLEJR2I20MHX4FGD8",
        tags : "brasil"
    },
    {
        titulo : "Homem de Ferro 2 (2010)",
        sinopse : "Tony Stark enfrenta um novo vilão que busca replicar a tecnologia do reator arc e um rival industrial que quer tomar seu lugar.",
        link : "https://www.disneyplus.com/pt-br/movies/homem-de-ferro-2/lXjCr9QmGGQJ",
        tags : "genio bilionario playboy filantropo"
    },
    {
        titulo : "Thor (2011)",
        sinopse : "O poderoso deus nórdico Thor é banido para a Terra e aprende a ser humilde depois de perder seus poderes.",
        link : "https://www.disneyplus.com/pt-br/movies/capitao-america-o-primeiro-vingador/6xvB6xZ4r95O",
        tags : ""
    },
    {
        titulo : "Os Vingadores (2012)",
        sinopse : "Os heróis mais poderosos da Terra se unem para salvar o mundo de uma invasão alienígena liderada pelo deus Loki.",
        link : "https://www.disneyplus.com/pt-br/movies/os-vingadores/2h6PcHFDbsPy",
        tags : ""
    },
    {
        titulo : "Homem de Ferro 3 (2013)",
        sinopse : "Tony Stark enfrenta um terrorista que ataca os Estados Unidos e questiona sua identidade como herói.",
        link : "https://www.disneyplus.com/pt-br/movies/homem-de-ferro-3/3s4Ihq7P2c6e",
        tags : "genio bilionario playboy filantropo"
    },
    {
        titulo : "Thor: O Mundo Sombrio (2013)",
        sinopse : "Thor enfrenta uma antiga ameaça: Malekith, o elfo negro, que busca mergulhar o universo em uma eterna escuridão.",
        link : "https://www.disneyplus.com/pt-br/movies/thor-o-mundo-das-trevas/ZHk7aM5xTbW7",
        tags : ""
    },
    {
        titulo : "Capitão América: O Soldado Invernal (2014)",
        sinopse : "O Capitão América descobre uma conspiração dentro da SHIELD e enfrenta seu antigo amigo, o Soldado Invernal.",
        link : "https://www.disneyplus.com/pt-br/movies/capitao-america-o-soldado-do-inverno/TVme5whcowSy",
        tags : ""
    },
    {
        titulo : "Guardiões da Galáxia (2014)",
        sinopse : "Um grupo de fora da lei se une para salvar a galáxia de um fanático religioso.",
        link : "https://www.disneyplus.com/pt-br/movies/guardioes-da-galaxia/1S4WM9h3KRR6",
        tags : "groot guaxinim drax invisivel"
    },
    {
        titulo : "Vingadores: Era de Ultron (2015)",
        sinopse : "Os Vingadores enfrentam Ultron, uma inteligência artificial criada por Tony Stark que ameaça a humanidade.",
        link : "https://www.disneyplus.com/pt-br/movies/vingadores-a-era-de-ultron/76IUxY0rNHzt",
        tags : ""
    },
    {
        titulo : "Homem-Formiga (2015)",
        sinopse : "Scott Lang, um ladrão, recebe um traje que permite reduzir seu tamanho e se torna o Homem-Formiga.",
        link : "https://www.disneyplus.com/pt-br/movies/homem-formiga/5c92KVf1zgUX",
        tags : ""
    },
    {
        titulo : "Capitão América: Guerra Civil (2016)",
        sinopse : "Os Vingadores se dividem após um acordo que os obriga a registrar suas identidades.",
        link : "https://www.disneyplus.com/pt-br/movies/capitao-america-guerra-civil/4ovfyKnnIBCg",
        tags : ""
        // Team Stark
    },
    {
        titulo : "Doutor Estranho (2016)",
        sinopse : "Um neurocirurgião se torna o Mago Supremo e protege a Terra de ameaças dimensionais.",
        link : "https://www.disneyplus.com/pt-br/movies/doutor-estranho/4GgMJ1aHKHA2",
        tags : "vim barganhar"
    },
    {
        titulo : "Guardiões da Galáxia Vol. 2 (2017)",
        sinopse : "Os Guardiões embarcam em uma nova aventura para descobrir a origem de Peter Quill.",
        link : "https://www.disneyplus.com/pt-br/movies/guardioes-da-galaxia-vol-2/ZdRX4mMbp1gM",
        tags : "groot guaxinim drax invisivel"
    },
    {
        titulo : "Homem-Aranha: De Volta ao Lar (2017)",
        sinopse : ">Peter Parker, um adolescente, se junta aos Vingadores e aprende a ser um herói.",
        link : "https://www.netflix.com/br/title/80166369",
        tags : ""
    },
    {
        titulo : "Thor: Ragnarok (2017)",
        sinopse : "Thor é banido de Asgard e deve impedir que sua irmã Hela destrua seu mundo.",
        link : "https://www.disneyplus.com/pt-br/movies/thor-ragnarok/3XqAT8UV8ojS",
        tags : ""
    },
    {
        titulo : "Pantera Negra (2018)",
        sinopse : "T'Challa retorna para Wakanda e assume o trono, enfrentando desafios internos e externos.",
        link : "https://www.disneyplus.com/pt-br/movies/black-panther/1GuXuYPj99Ke",
        tags : ""
    },
    {
        titulo : "Vingadores: Guerra Infinita (2018)",
        sinopse : "Thanos coleta as Joias do Infinito e elimina metade da vida no universo.",
        link : "https://www.disneyplus.com/pt-br/movies/vingadores-guerra-do-infinito/1WEuZ7H6y39v",
        tags : ""
    },
    {
        titulo : "Homem-Formiga e a Vespa (2018)",
        sinopse : "Scott Lang e Hope van Dyne embarcam em uma missão no Reino Quântico.",
        link : "https://www.disneyplus.com/pt-br/movies/-/5D7wkVHmlCKU?irclickid=Vp7R4Q3I%3AxyKRHmT39WvC3sOUkC148SXZ0AQzc0&irgwc=1&cid=DSS-Affiliate-Impact-Content-adorocinema+integra%C3%A7%C3%A3o+nativa-564546&tgclid=0f010000-158b-4931-be00-1acb66d92bf5&dclid=COW4nrj0qogDFfYbuQYdKjgw_g",
        tags : ""
    },
    {
        titulo : "Capitã Marvel (2019)",
        sinopse : "É a história de Carol Danvers, uma ex-piloto da Força Aérea que ganha poderes cósmicos após um acidente. Sem memória de sua vida na Terra, ela se vê no meio de uma guerra entre duas raças alienígenas e precisa descobrir sua verdadeira identidade para salvar o planeta.",
        link : "https://www.disneyplus.com/pt-br/movies/capitao-marvel/38xJGlLAQy9a",
        tags : ""
    },
    {
        titulo : "Vingadores: Ultimato (2019)",
        sinopse : "Os Vingadores viajam no tempo para reunir as Joias do Infinito e desfazer o estalo de Thanos.",
        link : "https://www.disneyplus.com/pt-br/movies/vingadores-endgame/aRbVJUb2h2Rf",
        tags : ""
    },
    {
        titulo : "Homem-Aranha: Longe de Casa (2019)",
        sinopse : "Peter Parker viaja para a Europa com seus amigos e enfrenta um novo vilão.",
        link : "https://www.primevideo.com/-/pt/detail/Homem-Aranha-Longe-De-Casa/0SP2T0F2VT868QB7T5OUUV18LG",
        tags : ""
    },
    {
        titulo : "Viúva Negra (2021)",
        sinopse : "Uma espiã, um passado sombrio. Natasha Romanoff, a Viúva Negra, precisa confrontar sua história como assassina e a organização que a criou. Em meio a uma perseguição mortal, ela reencontra sua família e luta para se libertar de seu passado.",
        link : "https://www.disneyplus.com/pt-br/movies/viuva-negra/3VfTap90rwZC",
        tags : ""
    },
    {
        titulo : "Shang-Chi e a Lenda dos Dez Anéis (2021)",
        sinopse : "Shang-Chi, um mestre em artes marciais, enfrenta seu passado e sua família.",
        link : "https://www.disneyplus.com/pt-br/movies/shang-chi-e-a-lenda-dos-dez-aneis/5GyV9sf9Y041",
        tags : ""
    },
    {
        titulo : "Eternos (2021)",
        sinopse : "Os Eternos, seres imortais criados pelos Celestiais, emergem para proteger a Terra.",
        link : "https://www.disneyplus.com/pt-br/movies/eternals-eternos/5cmhJAtkt6Jk",
        tags : ""
    },
    {
        titulo : "Homem-Aranha: Sem Volta para Casa (2021)",
        sinopse : "Peter Parker pede ajuda ao Doutor Estranho para que o mundo esqueça sua identidade, mas as coisas dão errado.",
        link : "https://www.primevideo.com/-/pt/detail/Spider-Man-No-Way-Home/0SDO00WXTPDLAM99CK7DB9ZMPT",
        tags : ""
    },
    {
        titulo : "Doutor Estranho no Multiverso da Loucura (2022)",
        sinopse : "O Doutor Estranho abre um portal para o multiverso, liberando forças sombrias.",
        link : "https://www.disneyplus.com/pt-br/movies/doutor-estranho-no-multiverso-da-loucura/27EiqSW4jIyH",
        tags : "feiticeira escarlate"
    },
    {
        titulo : "Thor: Amor e Trovão (2022)",
        sinopse : "Thor se junta a Valquíria e Korg para enfrentar Gorr, o Carniceiro dos Deuses.",
        link : "https://www.disneyplus.com/pt-br/movies/thor-amor-e-trovao/3htR8mRAZMoT",
        tags : "lixo esgoto horrivel ruim pessimo péssimo horrível"
    },
    {
        titulo : "Pantera Negra: Wakanda para Sempre (2022)",
        sinopse : "Wakanda luta para proteger sua nação após a morte do Rei T'Challa.",
        link : "https://www.disneyplus.com/pt-br/movies/black-panther-wakanda-para-sempre/7MAONYZ92wDT",
        tags : ""
    },
    {
        titulo : "Homem-Formiga e a Vespa: Quantumania (2023)",
        sinopse : "Scott Lang e Hope van Dyne exploram o Reino Quântico e enfrentam Kang, o Conquistador.",
        link : "https://www.disneyplus.com/pt-br/movies/homem-formiga-e-a-vespa-quantumania/7OLRMMgd1vkx",
        tags : "lixo esgoto horrivel ruim pessimo péssimo horrível"
    },
    {
        titulo : "Guardiões da Galáxia Vol. 3 (2023)",
        sinopse : "Os Guardiões da Galáxia estão de volta para uma última aventura épica! Em Guardiões da Galáxia Vol. 3, nosso grupo de desajustados favoritos se vê em mais uma missão perigosíssima para salvar um dos seus.",
        link : "https://www.disneyplus.com/pt-br/movies/guardioes-da-galaxia-volume-3/1tmc3nPw04S2",
        tags : "groot guaxinim drax invisivel"
    },
    {
        titulo : "The Marvels (2023)",
        sinopse : "Capitã Marvel, Ms. Marvel e Monica Rambeau unem forças para proteger a Terra.",
        link : "https://www.disneyplus.com/pt-br/movies/as-marvels/3sAcYG9CeWFw",
        tags : ""
    },
    {
        titulo : "WandaVision (2021)",
        sinopse : "Wanda Maximoff e Visão vivem uma vida suburbana ideal em uma pequena cidade, mas eventos estranhos começam a ocorrer, revelando segredos sombrios sobre seus poderes e a realidade que eles criaram.",
        link : "https://www.disneyplus.com/pt-br/series/wandavision/4SrN28ZjDLwH",
        tags : "feiticeira escarlate"
    },
    {
        titulo : "Falcão e o Soldado Invernal (2021)",
        sinopse : "Após os eventos de Vingadores: Ultimato, Sam Wilson/Falcão luta para assumir o manto de Capitão América, enquanto Bucky Barnes/Soldado Invernal tenta se livrar de seu passado como assassino.",
        link : "https://www.disneyplus.com/pt-br/series/o-falcao-e-o-soldado-do-inverno/4gglDBMx8icA",
        tags : ""
    },
    {
        titulo : "Loki (2021, 2023)",
        sinopse : "Uma versão alternativa de Loki, que escapou com o Tesseract durante os eventos de Vingadores, é presa pela Autoridade de Variância Temporal (AVT) e embarca em aventuras por diferentes linhas do tempo.",
        link : "https://www.disneyplus.com/pt-br/series/loki/6pARMvILBGzF",
        tags : ""
    },
    {
        titulo : "What If...? (2021, 2023)",
        sinopse : "Uma série animada que explora realidades alternativas do MCU, mostrando o que aconteceria se eventos importantes tivessem ocorrido de forma diferente.",
        link : "https://www.disneyplus.com/pt-br/series/e-se/7672ZVj1ZxU9",
        tags : ""
    },
    {
        titulo : "Gavião Arqueiro (2021)",
        sinopse : "Clint Barton/Gavião Arqueiro treina Kate Bishop, uma jovem arqueira, enquanto enfrenta uma ameaça do passado.",
        link : "https://www.disneyplus.com/pt-br/series/gaviao-arqueiro/11Zy8m9Dkj5l",
        tags : ""
    },
    {
        titulo : "Cavaleiro da Lua (2022)",
        sinopse : "Marc Spector, um mercenário com múltiplas personalidades, se torna o Cavaleiro da Lua, um vigilante com poderes sobrenaturais, e luta contra uma seita religiosa.",
        link : "https://www.disneyplus.com/pt-br/series/moon-knight-cavaleiro-da-lua/4S3oOF1knocS",
        tags : ""
    },
    {
        titulo : "Ms. Marvel (2022)",
        sinopse : "Kamala Khan, uma adolescente paquistanesa-americana, descobre que tem poderes de alongamento e se torna a super-heroína Ms. Marvel.",
        link : "https://www.disneyplus.com/pt-br/series/ms-marvel/45BsikoMcOOo",
        tags : ""
    },
    {
        titulo : "Mulher-Hulk: Defensora de Heróis (2022)",
        sinopse : "Jennifer Walters, uma advogada, se transforma na Mulher-Hulk após receber uma transfusão de sangue de seu primo, Bruce Banner, e precisa equilibrar sua vida profissional com seus novos poderes.",
        link : "https://www.disneyplus.com/pt-br/series/she-hulk-a-advogada/gPwaYusKqRQh",
        tags : "lixo esgoto horrivel ruim pessimo péssimo horrível"
    },
    {
        titulo : "Invasão Secreta (2023)",
        sinopse : "Uma raça alienígena chamada Skrulls infiltrou a Terra e assumiu a identidade de vários super-heróis e figuras públicas, causando caos e desconfiança.",
        link : "https://www.disneyplus.com/pt-br/series/invasao-secreta/3iHQtD1BDpgN",
        tags : ""
    },
    {
        titulo : "Echo (2024)",
        sinopse : "Maya Lopez, a Echo, uma assassina surda que possui a habilidade de copiar os movimentos de qualquer pessoa, ganha sua própria série, explorando seu passado e seus novos poderes.",
        link : "https://www.disneyplus.com/pt-br/series/echo/4unBxmuv2B8B",
        tags : ""
    },
    {
        titulo : "Demolidor: Born Again (2025)",
        sinopse : "Matt Murdock, o Demolidor, retorna em uma nova série, explorando sua vida como advogado e vigilante em Hell's Kitchen.",
        link : "",
        tags : ""
    },
    {
        titulo : "Coração de Ferro (2025)",
        sinopse : "Riri Williams, uma jovem gênio que constrói sua própria armadura de ferro, se torna a nova heroína Coração de Ferro.",
        link : "",
        tags : ""
    },
    {
        titulo : "Agatha: Darkhold Diaries (2024)",
        sinopse : "A feiticeira Agatha Harkness, após os eventos de WandaVision, embarca em novas aventuras, explorando os mistérios do Darkhold e os poderes da magia.",
        link : "",
        tags : ""
    },
    {
        titulo : "Agents of S.H.I.E.L.D. (2013-2020)",
        sinopse : "Ambientada no universo cinematográfico da Marvel, a série acompanha a equipe de agentes da S.H.I.E.L.D. liderada por Phil Coulson, explorando ameaças sobrenaturais e cósmicas que vão além das aventuras dos Vingadores. A série aborda temas como Inumanos, dimensões alternativas e conspirações globais.",
        link : "https://www.disneyplus.com/pt-br/series/agents-of-shield/2UT4VQrwpVgi",
        tags : ""
    },
    {
        titulo : "Demolidor (2015-2018)",
        sinopse : "Matt Murdock, um advogado cego com sentidos aguçados, luta contra o crime em Hell's Kitchen como o vigilante Demolidor. A série explora a dualidade de Matt, que durante o dia trabalha como advogado e à noite luta contra o crime organizado.",
        link : "https://www.disneyplus.com/pt-br/series/demolidor/5jKSWL7ZMg50",
        tags : ""
    },
    {
        titulo : "Jessica Jones (2015-2019)",
        sinopse : "Jessica Jones, uma ex-super-heroína traumatizada por um encontro com o vilão Kilgrave, tenta reconstruir sua vida como detetive particular em Nova York. A série aborda temas como abuso, trauma e superação.",
        link : "https://www.disneyplus.com/pt-br/series/jessica-jones/4LX4rNmINp5y",
        tags : ""
    },
    {
        titulo : "Luke Cage (2016-2018)",
        sinopse : "Luke Cage, um homem com super força e pele indestrutível, luta para proteger seu bairro em Harlem, Nova York, e se torna um símbolo de esperança para a comunidade.",
        link : "https://www.disneyplus.com/pt-br/series/luke-cage/1L458elR85KN",
        tags : ""
    },
    {
        titulo : "Punho de Ferro (2017-2018)",
        sinopse : "Danny Rand, um herdeiro bilionário que retorna a Nova York após anos desaparecido, utiliza suas habilidades marciais e o poder do Punho de Ferro para proteger a cidade.",
        link : "https://www.disneyplus.com/pt-br/series/punho-de-ferro/24YlE6bSZy6E",
        tags : ""
    },
    {
        titulo : "Os Defensores (2017)",
        sinopse : "Um crossover que reúne o Demolidor, Jessica Jones, Luke Cage e Punho de Ferro para enfrentar uma ameaça comum em Nova York.",
        link : "https://www.disneyplus.com/pt-br/series/os-defensores/1vLuQyD9nTYk",
        tags : ""
    },
    {
        titulo : "O Justiceiro (2017-2019)",
        sinopse : "Frank Castle, um ex-marine que busca vingança pela morte de sua família, se torna o vigilante conhecido como Justiceiro. A série explora temas como trauma, violência e a linha tênue entre justiça e vingança.",
        link : "https://www.disneyplus.com/pt-br/series/o-justiceiro/6JOZHgU6cBS3",
        tags : ""
    },
    {
        titulo : "Cloak e Dagger (2018-2019)",
        sinopse : "Tandy Bowen e Tyrone Johnson, dois adolescentes com poderes opostos, se unem para proteger sua comunidade em Nova York.",
        link : "https://www.disneyplus.com/pt-br/series/cloak-dagger/4mUMHeti2YCc",
        tags : "manto e adaga"
    },
    {
        titulo : "Fugitivos (2017-2019)",
        sinopse : "Um grupo de adolescentes descobre que seus pais são vilões e fogem para salvar o mundo.",
        link : "",
        tags : ""
    },
    {
        titulo : "Morbius (2022)",
        sinopse : "O Dr. Michael Morbius, um bioquímico com uma doença rara do sangue, se transforma em um vampiro após um experimento científico.",
        link : "https://www.primevideo.com/detail/amzn1.dv.gti.6cdeda97-297a-4299-97f0-522f0e1ad600?tag=adorocinemabrasil-bouton-20",
        tags: "morcego lixo"
    },
    {
        titulo : "Deadpool (2016)",
        sinopse : "Wade Wilson, um ex-agente das Forças Especiais, se submete a um experimento que lhe concede um fator de cura acelerado, mas também o deixa desfigurado. Com um senso de humor negro e habilidades regenerativas, ele se torna o mercenário Deadpool.",
        link : "https://www.disneyplus.com/pt-br/movies/deadpool/3Kh13Lrb0Pnv",
        tags : ""
    },
    {
        titulo : "Deadpool 2 (2018)",
        sinopse : "Deadpool forma uma equipe de mutantes inadaptados para salvar um garoto mutante de um vilão que quer usá-lo para seus próprios fins. O filme apresenta personagens como Cable, Domino e Colossus.",
        link : "https://www.disneyplus.com/pt-br/movies/deadpool-2/LSuXSQ3S5mxU",
        tags : ""
    },
    {
        titulo : "Logan (2017)",
        sinopse : "Em um futuro distópico, um Logan envelhecido e cansado cuida de um jovem mutante chamado Laura, enquanto é perseguido por um grupo de soldados geneticamente modificados. Este filme é uma história sombria e emocionante que explora a mortalidade de um dos personagens mais icônicos da Marvel.",
        link : "https://www.disneyplus.com/pt-br/movies/logan/4BPdGjuoQAvT",
        tags : "wolverine"
    },
    {
        titulo : "Venom (2018)",
        sinopse : "Eddie Brock, um jornalista investigativo, se funde com um simbionte alienígena, dando origem a Venom. A dupla deve aprender a coexistir enquanto enfrenta outros simbiontes e uma ameaça global.",
        link : "https://www.disneyplus.com/pt-br?cid=DTCI-Synergy-DisneyBR-Site-Awareness-LatamOnGoing-BR-DisneyPlus-NA-PTBR-ArticleLink-ArticleLink-DisneyBR-NA",
        tags : ""
    },
    {
        titulo : "Venom: Tempo de Carnificina (2021)",
        sinopse : "Eddie Brock e Venom continuam sua jornada, enfrentando um novo vilão, o Carnificina, que está ligado ao passado de Eddie.",
        link : "https://www.primevideo.com/dp/0UAL2H1G2BM99C5KRVIKPSV0QY?ref_=dvm_pds_tit_br_sw_s_g_mkw_s4JwpE7OEwi-dc&mrntrk=pcrid_676881698123_slid__pgrid_154119591003_pgeo_1001692_x__adext__ptid_kwd-2225760635735&_mkw_s4JwpE7OEwi-dc&mrntrk=pcrid_676881698123_slid__pgrid_154119591003_pgeo_1001692_x__adext__ptid_kwd-2225760635735&gclid=Cj0KCQjwiuC2BhDSARIsALOVfBISYpUvYDi7pCzkVAx7_RPMnUdmkF8R0dgQg0u8gum77uzLWZASGakaAuRREALw_wcB&gclsrc=aw.ds",
        tags : ""
    },
    {
        titulo : "Blade (1998)",
        sinopse : "Blade, um meio-vampiro, meio-humano, luta contra vampiros e outros monstros. Com habilidades sobre-humanas e um desejo de vingança, ele se torna um defensor da humanidade contra as forças das trevas.",
        link : "https://www.primevideo.com/-/pt/detail/Blade/0T1QZURW7X0E2LFPV5T35Z87TC",
        tags : ""
    },
    {
        titulo : "Blade II (2002)",
        sinopse : "Blade se une a um grupo de vampiros rebeldes para combater uma nova ameaça híbrida que ameaça tanto vampiros quanto humanos.",
        link : "https://www.primevideo.com/dp/amzn1.dv.gti.b6ac5b7c-91ac-b299-cbba-1d3b237eaf90?autoplay=0&ref_=atv_cf_strg_wb",
        tags : ""
    },
    {
        titulo : "Blade: Trinity (2004)",
        sinopse : "Blade enfrenta um poderoso vampiro ancião que busca dominar o mundo.",
        link : "https://www.primevideo.com/dp/amzn1.dv.gti.e0ac5b7c-daf2-048e-f3d6-eab12ca5f22f?autoplay=0&ref_=atv_cf_strg_wb",
        tags : ""
    },
    {
        titulo : "Homem-Aranha (2002)",
        sinopse : "Peter Parker, um adolescente picado por uma aranha radioativa, ganha superpoderes e se torna o Homem-Aranha. Ele deve equilibrar sua vida pessoal com suas responsabilidades como super-herói.",
        link : "https://www.primevideo.com/dp/amzn1.dv.gti.cead7694-eff2-ca75-2003-1504f2ccca99?autoplay=0&ref_=atv_cf_strg_wb",
        tags : ""
    },
    {
        titulo : "Homem-Aranha 2 (2004)",
        sinopse : "Peter Parker luta para conciliar sua vida pessoal e profissional com seus deveres como Homem-Aranha, enquanto enfrenta novos desafios e um vilão com poderes semelhantes aos seus.",
        link : "https://www.primevideo.com/dp/amzn1.dv.gti.7eb94dba-4f13-f47d-b6cd-ec39b8321862?autoplay=0&ref_=atv_cf_strg_wb",
        tags : ""
    },
    {
        titulo : "Homem-Aranha 3 (2007)",
        sinopse : "Peter Parker é possuído por um simbionte alienígena, que o transforma em uma versão mais sombria e violenta de si mesmo.",
        link : "https://www.primevideo.com/dp/amzn1.dv.gti.ee142670-0aa6-49be-9a59-176db5c98a93?autoplay=0&ref_=atv_cf_strg_wb",
        tags : ""
    },
    {
        titulo : "O Espetacular Homem-Aranha (2012)",
        sinopse : "Uma nova reinicialização da franquia do Homem-Aranha, apresentando uma versão mais jovem de Peter Parker e explorando sua origem de forma diferente.",
        link : "https://www.primevideo.com/dp/amzn1.dv.gti.c6a9f777-5684-5d21-0f7a-17a5be2c3b61?autoplay=0&ref_=atv_cf_strg_wb",
        tags : ""
    },
    {
        titulo : "O Espetacular Homem-Aranha 2 (2014)",
        sinopse : "Peter Parker enfrenta novos desafios, incluindo a ameaça do Duende Verde e a necessidade de equilibrar sua vida pessoal e profissional.",
        link : "https://www.primevideo.com/dp/amzn1.dv.gti.20b7ed79-2edf-fc70-5137-e16527401630?autoplay=0&ref_=atv_cf_strg_wb",
        tags : ""
    },
    {
        titulo : "Madame Teia (2024)",
        sinopse : "Se desviando do gênero típico, Madame Teia conta a história de uma das heroínas mais enigmáticas da Marvel. Cassandra Webb, uma paramédica de Manhattan que tem habilidades clarividentes.",
        link : "https://www.primevideo.com/dp/amzn1.dv.gti.9fcf828f-abd4-4278-ad6c-49695d070fa1?autoplay=0&ref_=atv_cf_strg_wb",
        tags : "paramedica 50 tons de cinza lixo"
    },
    {
        titulo : "Quarteto Fantástico (2005)",
        sinopse : "Quatro astronautas são expostos a radiação cósmica e ganham poderes sobre-humanos, formando o Quarteto Fantástico.",
        link : "https://www.disneyplus.com/pt-br/movies/quarteto-fantastico/3ctHqNJpmuke",
        tags : ""
    },
    {
        titulo : "Quarteto Fantástico e o Surfista Prateado (2007)",
        sinopse : "O Quarteto Fantástico enfrenta o Surfista Prateado, um heraldo de Galactus, que ameaça devorar a Terra.",
        link : "https://www.disneyplus.com/pt-br/movies/quarteto-fantastico-e-o-surfista-prateado/NeFygQurP7Yh",
        tags : ""
    },
    {
        titulo : "X-Men (2000)",
        sinopse : "Um grupo de mutantes com superpoderes luta por seus direitos e contra a intolerância.",
        link : "https://www.disneyplus.com/pt-br/movies/x-men/4QoNe0ea49nP",
        tags : "xmen"
    },
    {
        titulo : "X-Men 2 (2003)",
        sinopse : "Os X-Men enfrentam uma nova ameaça enquanto o governo dos Estados Unidos tenta capturar e controlar todos os mutantes.",
        link : "https://www.disneyplus.com/pt-br/movies/x-men-2/5VwEJ3Asxv5a",
        tags : "xmen"
    },
    {
        titulo : "X-Men: O Confronto Final (2006)",
        sinopse : "Os X-Men se dividem em duas facções, enquanto o mundo se prepara para uma guerra entre humanos e mutantes.",
        link : "https://www.disneyplus.com/pt-br/movies/x-men-confronto-final/5pKcSSNWwwgW",
        tags : "xmen"
    },
    {
        titulo : "X-Men Origens: Wolverine (2009)",
        sinopse : "A história de origem de Wolverine, desde sua infância até se tornar o mutante que conhecemos.",
        link : "https://www.disneyplus.com/pt-br/movies/x-men-origens-wolverine/2jc0ZToOER1j",
        tags : "xmen"
    },
    {
        titulo : "X-Men: Primeira Classe (2011)",
        sinopse : "Uma pré-sequência que mostra a formação original dos X-Men, durante a Guerra Fria.",
        link : "https://www.disneyplus.com/pt-br/movies/x-men-o-inicio/15ELm1fiAfKq",
        tags : "xmen"
    },
    {
        titulo : "X-Men: Dias de um Futuro Esquecido (2014)",
        sinopse : ">Os X-Men viajam no tempo para impedir um futuro sombrio onde os mutantes são caçados e exterminados.",
        link : "https://www.disneyplus.com/pt-br/movies/x-men-dias-de-um-futuro-esquecido/12X4W0gKaZr4",
        tags : "xmen"
    },
    {
        titulo : "X-Men: Apocalipse (2016)",
        sinopse : "O poderoso mutante Apocalipse desperta e busca purificar a humanidade, reunindo os X-Men para detê-lo.",
        link : "https://www.disneyplus.com/pt-br/movies/x-men-apocalipse/8ElyHmLZJyGQ",
        tags : "xmen"
    },
    {
        titulo : "Elektra (2005)",
        sinopse : "Uma jovem assassina treinada por um mestre ninja é ressuscitada e deve enfrentar seu passado.",
        link : "https://www.disneyplus.com/pt-br/movies/elektra/79FYkvoTwwYT",
        tags : ""
    },
    {
        titulo : "Motoqueiro Fantasma (2007)",
        sinopse : "Johnny Blaze vende sua alma ao diabo em troca da vida de seu pai. Ele se torna o Motoqueiro Fantasma, um espírito de vingança que luta contra o mal.",
        link : "https://www.primevideo.com/dp/amzn1.dv.gti.58ad0071-4e3d-c936-1466-3d099a2e18fd?autoplay=0&ref_=atv_cf_strg_wb",
        tags : ""
    },
    {
        titulo : "Motoqueiro Fantasma: Espírito de Vingança (2011)",
        sinopse : "Johnny Blaze retorna como o Motoqueiro Fantasma para enfrentar uma nova ameaça e proteger um jovem menino.",
        link : "https://www.primevideo.com/-/pt/detail/Motoqueiro-Fantasma-Esp%C3%ADrito-de-Vingan%C3%A7a/0HX5P4SYK66XX41G01QL81GPGG",
        tags : ""
    },
    {
        titulo : "Capitão América: Brave New World (2025)",
        sinopse : "Sam Wilson, após assumir o manto do Capitão América em Falcão e o Soldado Invernal, enfrenta novos desafios e ameaças globais. A trama provavelmente explorará a luta de Sam para se firmar como o novo Capitão América e lidar com o legado de Steve Rogers.",
        link : "",
        tags : ""
    },
    {
        titulo : "Thunderbolts (2025)",
        sinopse : "Uma equipe de anti-heróis, possivelmente incluindo personagens como o Barão Zemo, Yelena Belova, e o Soldado Invernal, é reunida para missões perigosas e controversas, sob a supervisão do governo.",
        link : "",
        tags : ""
    },
    {
        titulo : "Blade (2025)",
        sinopse : "Mahershala Ali interpreta Blade, o caçador de vampiros, em um reboot da franquia. A trama pode explorar a origem de Blade e sua luta contra um novo tipo de ameaça vampírica, possivelmente conectando-se com outros elementos do MCU.",
        link : "",
        tags : ""
    },
    {
        titulo : "Deadpool & Wolverine (2024)",
        sinopse : "Wade Wilson lida com as consequências de seus atos anteriores e tenta navegar pelas complexidades do multiverso, desencadeando uma série de eventos inesperados. Ao longo de sua jornada, Deadpool encontra Wolverine.",
        link : "",
        tags : ""
    },
    {
        titulo : "Quarteto Fantástico (2025)",
        sinopse : "A família mais famosa da Marvel é reiniciada no MCU, com uma nova equipe explorando o espaço e enfrentando ameaças cósmicas. A trama pode se conectar com os eventos de Guerra Secretas e introduzir o conceito de multiverso.",
        link : "",
        tags : ""
    },
    {
        titulo : "Vingadores: Doomsday (2026)",
        sinopse : "Os Vingadores, agora mais unidos e experientes, precisarão reunir todos os seus aliados, incluindo os novos heróis introduzidos na Fase 5, para enfrentar essa ameaça colossal. A trama explorará os limites dos poderes dos heróis, as consequências das suas escolhas e a importância da união para salvar o multiverso.",
        link : "",
        tags : ""
    },
    {
        titulo : "Vingadores: Guerras Secretas (2027)",
        sinopse : "Um evento épico que promete reunir todos os heróis e vilões do MCU em uma batalha cósmica. A trama pode envolver a destruição e reconstrução do multiverso, com consequências duradouras para o futuro do MCU.",
        link : "",
        tags : ""
    },
    {
        titulo : "Venom: A Última Rodada (2024)",
        sinopse : "Uma nova e poderosa ameaça surge, colocando em risco não apenas a vida de Eddie, mas também o futuro da Terra. O simbionte Venom, por sua vez, se vê dividido entre seus impulsos mais violentos e a necessidade de proteger seu hospedeiro.",
        link : "",
        tags : ""
    },
];