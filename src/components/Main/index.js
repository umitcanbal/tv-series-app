import React from "react";
import { Switch, Route } from "react-router-dom";

import Series from "../../containers/Series";
import SingleSeries from "../../containers/SingleSeries";

const Main = (props) => (
  <Switch>
    <Route exact path="/" component={Series} />
    <Route exact path="/series/:id" component={SingleSeries} />
  </Switch>
);

export default Main;

// Bu aşamaya kadarki component şeması şöyleydi:
// App-->Main-->Series-->Intro & (SeriesList-->SeriesListItem + SeriesListItem + SeriesListItem ...)

// Ve Main komponentini yaratma amacımız renderlanacak sayfaya karar verebilmekti ve sadece Series komponentini "/" pathinde (yani anasayfa) renderlıyoduk. Şimdi ikinci sayfayı(SingleSeries) da ekledik ve path'e göre bu iki komponentten birisi renderlanacak, iki aynı anda renderlanamaz. Yani son komponent şeması şöyle oldu

// App-->Main-->(Series-->Intro & (SeriesList-->SeriesListItem + SeriesListItem + SeriesListItem ...)) || SingleSeries

// Eğer ki SingleSeries'ı renderlayacak path'i URL olarak girersem; Series komponentinin kendisini ve içindeki hiçbir şeyi görüntüleyemem/renderlayamam. SingleSeries'ı renderladığım takdirde göreceğim tek şey komponentin kendisi ve içindekiler (ki şu durumda SingleSeries komponentinin içinde başka bi komponent yok sadece yazılar vs var) olur. Bu dediklerim Main komponenti adına geçerli tabii ki, Main komponentini renderlayan App komponentinin içindeki geri kalan komponent ve yazılar (Main komponenti dışındaki her şey); ben Series'ı renderlayacak URL'i girsem de SingleSeries'ı renderlayacak URL'i girsem de baki kalır!! Bu durumda baki kalan tek şey App komponenti içindeki "h1" elementi yani sayfanın header'ıdır.