type EuroTeam = {
  [key: string]: { [key: string]: string }[];
};

const euroTeam: EuroTeam = {
  A조: [
    { GER: '독일' },
    { SCO: '스코틀랜드' },
    { HUN: '헝가리' },
    { SUI: '스위스' },
  ],
  B조: [
    { ESP: '스페인' },
    { CRO: '크로아티아' },
    { ITA: '이탈리아' },
    { ALB: '알바니아' },
  ],
  C조: [
    { SVN: '슬로베니아' },
    { DEN: '덴마크' },
    { SRB: '세르비아' },
    { ENG: '잉글랜드' },
  ],
  D조: [
    { POL: '폴란드' },
    { NED: '네덜란드' },
    { AUT: '오스트리아' },
    { FRA: '프랑스' },
  ],
  E조: [
    { BEL: '벨기에' },
    { SVK: '슬로바키아' },
    { ROU: '루마니아' },
    { UKR: '우크라이나' },
  ],
  F조: [
    { TUR: '튀르키에' },
    { GEO: '조지아' },
    { POR: '포르투갈' },
    { CZE: '체코' },
  ],
};

export default euroTeam;
