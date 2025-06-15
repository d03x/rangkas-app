import { memo } from "react";
import type { AppScreenProps } from "@/navigation/AppNavigation/AppScreensTypes";
import * as Layout from "@/components/Layouts";
import AppHeader from "./components/Header";
import Animated from "react-native-reanimated";
import * as Styled from "@/screens/Home/screens.styled";
import Text from "@component/Text";
import { useAppTheme } from "@/contexts/AppThemeProvider";
import { FlatList, ScrollView, useWindowDimensions, View } from "react-native";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
const HomeTabScreen = ({ navigation }: AppScreenProps) => {
  const { theme: colors } = useAppTheme();
  const menus: Array<{
    name: string;
    icon: typeof Ionicons.defaultProps;
  }> = [
    {
      name: "Transfer",
      icon: "repeat",
    },
    {
      name: "Qrcode",
      icon: "qr-code",
    },
    {
      name: "Tarik",
      icon: "person",
    },
    {
      name: "Topup",
      icon: "add-circle-outline",
    },
  ];

  const featureMenu: Array<{
    name: string;
    icon: typeof Ionicons.defaultProps;
  }> = [
    {
      name: "OnRide",
      icon: "motorcycle",
    },
    {
      name: "Makanan",
      icon: "utensils",
    },
    {
      name: "OnJemput",
      icon: "truck",
    },
    {
      name: "Tagihan",
      icon: "cloud",
    },
    {
      name: "OnCar",
      icon: "car",
    },
    {
      name: "OnService",
      icon: "hammer",
    },
  ];
  const { width } = useWindowDimensions();
  return (
    <Layout.ThemedView>
      <AppHeader navigation={navigation} />
      <View
        style={{
          backgroundColor: colors.primary,
          height: 180,
          width: width,
        }}
      />
      <ScrollView
        style={{
          marginTop: -180,
        }}
      >
        <View
          style={{
            marginTop: 120,
          }}
        >
          <View
            style={{
              borderRadius: 10,
              backgroundColor: colors.surface,
            }}
          >
            <Styled.HomeCard colors={colors}>
              <Styled.Card.SaldoInfo colors={colors}>
                <Styled.Card.SaldoInfoTitle>
                  Saldo Anda
                </Styled.Card.SaldoInfoTitle>
                <Styled.Card.SaldoValue>Rp.90.0000</Styled.Card.SaldoValue>
              </Styled.Card.SaldoInfo>
              <Styled.Card.Menu.List colors={colors}>
                <FlatList
                  contentContainerStyle={{ justifyContent: "space-between" }}
                  numColumns={4}
                  data={menus}
                  renderItem={({ item, index }) => (
                    <Styled.Card.Menu.Item
                      style={{
                        marginInline:
                          index != menus.length - 1 && index != 0 ? 10 : 0,
                      }}
                      key={index}
                    >
                      <Ionicons
                        color={colors.text}
                        size={17}
                        name={item.icon}
                      />
                      <Text
                        style={{
                          color: colors.text,
                        }}
                        size={12}
                      >
                        {item.name}
                      </Text>
                    </Styled.Card.Menu.Item>
                  )}
                />
              </Styled.Card.Menu.List>
            </Styled.HomeCard>

            <Styled.Card.Feature.Menu>
              <Styled.Card.Menu.List colors={colors}>
                <FlatList
                  contentContainerStyle={{ justifyContent: "space-between" }}
                  numColumns={3}
                  data={featureMenu}
                  renderItem={({ item, index }) => (
                    <Styled.Card.Feature.MenuItem colors={colors} key={index}>
                      <FontAwesome6
                        size={30}
                        name={item.icon}
                        color={colors.primary}
                      />
                      <Text
                        size={12}
                        style={{
                          color: colors.textSecondary,
                        }}
                        font="Poppins-Bold"
                      >
                        {item.name}
                      </Text>
                    </Styled.Card.Feature.MenuItem>
                  )}
                />
              </Styled.Card.Menu.List>
            </Styled.Card.Feature.Menu>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              esse repellendus, expedita minima libero suscipit laudantium
              sapiente eligendi, consectetur nihil unde enim. Non facere eius
              animi expedita, accusantium quis modi. Quis animi quod soluta
              blanditiis, amet, quisquam hic ad unde cumque vero, distinctio id
              natus sint repellendus perspiciatis porro quaerat architecto.
              Reprehenderit deleniti, cum sequi ad nisi maxime. Libero,
              reprehenderit. Temporibus incidunt necessitatibus quisquam id hic
              vel, perferendis tempore quidem sed. Pariatur eligendi quisquam
              cumque vero amet nihil quidem dolorem obcaecati, molestiae vel
              voluptate perspiciatis at aliquam assumenda sint suscipit!
              Possimus fugiat itaque dicta nostrum dolore ratione quo magnam
              mollitia velit quas officiis non obcaecati nemo, accusantium
              suscipit delectus veniam similique recusandae est sint laudantium
              harum. Mollitia laborum officiis earum. Ipsam magnam cumque
              aperiam itaque nobis libero recusandae laudantium vitae iste illum
              necessitatibus, architecto velit omnis incidunt modi, repellendus
              praesentium explicabo aliquam accusamus atque dolorem. Quo sit
              assumenda quaerat maiores! Rem, culpa. Ad impedit quod enim
              ratione at voluptas alias porro facere eaque similique quae
              dolorum unde optio dolorem atque, voluptatum quibusdam possimus
              dolor explicabo temporibus aspernatur molestiae repellat? Debitis?
              Placeat dolor culpa, doloribus nulla adipisci tempora nisi
              molestias, sed a molestiae cupiditate expedita. Molestiae
              quisquam, debitis culpa eaque est quaerat ipsa error magni rerum
              sunt aliquam quod? Nesciunt, soluta. Amet laudantium totam dolores
              itaque earum porro eum nihil reiciendis consectetur quos optio
              laboriosam, a quisquam iste ullam numquam ratione debitis,
              repellat nam, quasi iusto enim aut. Nulla, ex? Praesentium. Et
              mollitia eligendi cupiditate, laborum minima adipisci amet quo
              quis autem culpa aliquid nesciunt ad deserunt quas alias,
              perferendis libero suscipit. Blanditiis dolorem eos ipsum error
              laboriosam, nobis veniam minus! Quos quidem temporibus nostrum
              animi aliquid delectus architecto unde repellat autem doloribus!
              Reiciendis sed id ad asperiores numquam error, magni et tempora,
              atque suscipit labore beatae necessitatibus nobis debitis soluta.
              Cupiditate, distinctio animi ipsum sunt cum assumenda obcaecati
              eius ex, veritatis similique neque vero ducimus esse, reiciendis
              inventore pariatur tenetur at. Quos obcaecati enim esse!
              Perferendis commodi eos tempore iusto! Accusantium veniam
              consectetur numquam est dignissimos esse, placeat ipsa dolorem
              doloribus error ad libero blanditiis sed! Deserunt, obcaecati
              perferendis eveniet magni temporibus natus nesciunt distinctio
              nostrum beatae corrupti voluptas quisquam. Eos, molestiae
              exercitationem eius ullam perspiciatis vitae officia placeat,
              laboriosam modi a libero, ducimus fugiat quaerat ex pariatur porro
              cumque? Quidem libero obcaecati eos ipsa quo repellat optio fugit
              itaque! Ut, perferendis. Iste, corrupti! Rem, architecto sed ex
              quaerat, porro incidunt ab voluptatem omnis aliquid ipsum ipsa
              fugit dolore tenetur excepturi obcaecati adipisci illo quos sint
              assumenda reiciendis repudiandae nihil. Nemo iste ratione,
              molestiae nobis quae doloremque fugiat enim blanditiis asperiores
              corporis, nam suscipit quo deleniti necessitatibus cupiditate
              voluptate sit, harum ea exercitationem aliquid provident quisquam!
              Sed in officiis autem? Deleniti sequi dolor omnis animi
              praesentium ducimus. Suscipit cum vitae rerum placeat aliquid eum
              incidunt nobis excepturi, commodi dolorum nihil possimus sunt ad
              ipsam minima qui? Quaerat asperiores suscipit et. Culpa, quidem
              beatae maxime neque magnam quasi debitis ab cupiditate tempore
              harum nisi? Illum, fugiat. Nam aperiam consectetur autem itaque,
              quidem odit aliquid alias numquam voluptatibus minima in, aut
              soluta? Distinctio perferendis eligendi accusantium nam ipsam
              atque nobis ratione quam praesentium eos recusandae velit quos
              qui, a unde amet, harum vero assumenda, itaque minima repellat
              eius neque perspiciatis? Deleniti, quos? Perferendis et dicta aut
              debitis error quos aspernatur dolorum, minima fuga! Neque esse
              natus quasi voluptas rem nam numquam odit culpa nostrum molestiae.
              Modi repudiandae ullam ea, nisi quam vitae. Voluptatibus explicabo
              sit voluptate, aut repudiandae quae veniam amet quos voluptatum
              perferendis. Nam explicabo enim exercitationem inventore rerum
              debitis at voluptatum, porro minima nisi aut quibusdam,
              consequuntur dolor ullam consequatur? Doloremque facere quos
              voluptate numquam beatae molestiae perspiciatis nesciunt! Sequi
              nobis nesciunt nemo fugiat, perferendis aliquid repellat quam,
              doloremque temporibus aut earum. Inventore rerum, neque officiis
              dolorem quaerat molestias sequi. Iure molestias cumque expedita
              illum labore quisquam quidem voluptates sit ipsum, adipisci est
              quam obcaecati repellat nobis accusantium? Dolores excepturi illo
              tempora dignissimos nostrum numquam! Saepe nobis enim reiciendis
              quibusdam! A placeat, iusto praesentium deleniti, neque
              perspiciatis molestias ipsa eum harum at excepturi repellendus
              quod alias error accusantium, ipsam possimus tempora! Ipsum, ex
              necessitatibus eligendi consequuntur debitis voluptatem cumque
              consequatur. Officiis eum deserunt asperiores molestias, dolore
              quia minus eligendi. Quas eos dolore quidem corrupti ipsa
              explicabo voluptatibus voluptatum ad et impedit, repellat, aliquam
              recusandae voluptates assumenda blanditiis distinctio. Commodi,
              ducimus? Optio, rerum ad. Enim excepturi quos, ipsa repellat
              necessitatibus vero commodi aspernatur reprehenderit quia, ab
              nesciunt modi hic a id? Maiores consequatur harum aut iure ipsum
              eligendi! Exercitationem, consequuntur commodi? Labore dolor ad
              quisquam nam voluptas magni, aut mollitia assumenda incidunt
              repellendus omnis ipsam iste quibusdam, vitae eum soluta
              explicabo? Dolore ipsam dolorem accusamus sunt, eos adipisci
              corporis consectetur architecto! Maiores exercitationem iusto
              accusantium, itaque veritatis quia id officiis magnam,
              consequuntur tenetur assumenda sunt delectus dolorum distinctio
              sit, amet placeat voluptatum? Repudiandae expedita illum ea
              deleniti facilis cumque magnam repellat. Tempore error
              necessitatibus omnis nobis exercitationem dolorum libero
              cupiditate quod similique quisquam. Fuga distinctio quidem neque
              exercitationem molestias aspernatur a nam omnis deleniti
              cupiditate fugiat, quae esse sit nesciunt illum. Delectus esse
              expedita quam fugiat reprehenderit non possimus dignissimos
              quaerat repellendus autem? Illo, necessitatibus quisquam
              praesentium doloremque at quas accusantium culpa totam, vel animi
              nam pariatur magnam beatae quasi ipsum. Enim expedita quasi quam
              officiis temporibus deserunt accusamus iste optio veritatis
              facilis quia cum maxime, fugit voluptas ipsa quae facere, nisi
              nemo rem ex tenetur ratione perferendis? Possimus, laborum
              nostrum. Doloribus consequuntur eaque id incidunt perspiciatis
              atque dignissimos illo est provident cupiditate! Dicta recusandae
              eum totam soluta iure maxime provident, sit deleniti explicabo
              repellendus quibusdam quis delectus aut harum aspernatur. Ad,
              debitis at nesciunt deleniti reiciendis voluptatem. Similique sunt
              explicabo aperiam ipsa facere voluptatum tempore, eius ratione
              animi. Ad modi hic consectetur inventore, id iste nisi eaque quia
              veniam ea! Rem id necessitatibus voluptas cumque corrupti animi
              beatae quos, quas debitis! Vel fuga iusto exercitationem totam
              distinctio beatae quas dolor, ea fugiat excepturi quos architecto
              sint numquam veniam esse quam? Eaque dolorum enim voluptas laborum
              excepturi facere voluptate quia ipsa in corrupti. Debitis commodi
              facere, cupiditate eius eligendi illo doloribus impedit
              voluptates! Veniam nihil doloremque itaque exercitationem
              cupiditate ea in! Aut, nihil minus, autem, enim quo aspernatur
              accusantium explicabo suscipit culpa fuga at quis consequuntur
              perspiciatis aperiam qui repellendus! Rerum, quae repellendus
              commodi illum eum magnam quos perspiciatis delectus.
              Necessitatibus! Qui molestiae nostrum vero earum iste veritatis
              voluptates atque magni, neque, rem alias autem esse sapiente
              beatae blanditiis nobis perferendis laboriosam eligendi inventore
              delectus! Consequatur id harum enim deserunt blanditiis. Error
              nostrum eligendi non cumque inventore quas maiores quam! Modi,
              officiis vitae. Ducimus consequatur doloremque dolorum hic,
              obcaecati aliquam commodi mollitia. Neque voluptatem praesentium
              error laboriosam? Voluptate nesciunt repellendus quibusdam? Eius,
              doloremque. Ut temporibus aspernatur nam at eos officiis dolore
              obcaecati ea asperiores, repellat id nihil similique error omnis
              eius. Veritatis, illo temporibus. Voluptates consequuntur in, at
              officia ullam laboriosam! Cum illo aliquid adipisci a itaque
              dolore eius explicabo officia, ullam, voluptate impedit doloribus
              veniam iure facilis saepe, tempora rerum fuga at laborum
              repellendus in architecto? Quidem saepe unde obcaecati. Ab eum quo
              nihil incidunt. Ab, quaerat deserunt perferendis cum architecto
              aliquid, adipisci eaque ex asperiores ad vero, nemo quisquam
              obcaecati at veniam incidunt nihil! Sed, accusantium.
              Voluptatibus, quaerat odio? Repellendus, ad. Suscipit, cum. Sint
              repellat eveniet sunt ut quam maxime dolorum blanditiis nulla
              voluptatem reiciendis expedita architecto porro amet recusandae
              inventore adipisci, quaerat asperiores accusamus quis, illo vel.
              Exercitationem? Odio cumque laborum vel sit praesentium rerum
              nesciunt tempore illum explicabo, ea mollitia, ad natus
              asperiores, molestias laboriosam saepe labore non fuga tempora
              totam veniam est aut doloremque. Vel, corrupti. Magni ipsum quidem
              perferendis sint nostrum expedita aliquam asperiores minima odio
              placeat voluptatum laboriosam molestiae a quis eos, veritatis
              ullam voluptatem quam tempore vero officiis molestias. Aliquid
              deserunt minus ullam? Enim aliquid soluta voluptates, nesciunt
              veniam consequuntur dolor nulla sit assumenda magni fuga cumque
              eveniet culpa ea rerum facere officia unde blanditiis illo, eaque
              autem labore. Quis dolorem error esse! Minus, fugit amet
              assumenda, facere molestiae fuga dolores accusamus quam nam magni
              rem beatae adipisci aspernatur nisi cum perferendis hic dolorum
              esse architecto sed! Earum distinctio dignissimos hic molestiae
              sequi. Exercitationem minima aspernatur dolorum autem voluptatem
              sint sit aliquid, neque pariatur maxime a, quos quisquam quo
              repudiandae? Saepe temporibus est explicabo ad ea, modi, vitae in
              harum nisi itaque velit? Ducimus, neque! Dicta est iste placeat
              dolores quos molestiae, assumenda fuga explicabo illo harum
              repellendus cumque recusandae at accusantium perferendis labore
              doloribus. Temporibus numquam nam ipsam aut nulla, vero placeat.
              Est modi quisquam quia eveniet reprehenderit consectetur minus
              suscipit, exercitationem eaque. Ex nisi odio enim architecto eos
              ipsum sunt, a consequatur laboriosam corporis quam asperiores
              necessitatibus molestias iste. Placeat, vero! Debitis libero,
              perspiciatis molestiae saepe rerum ex itaque, atque, unde eaque
              officiis quod. Incidunt, eaque odio voluptates nesciunt fugiat
              impedit labore vel atque explicabo dolore reiciendis, molestias
              doloremque numquam necessitatibus. Delectus quia qui minima
              obcaecati velit unde accusamus quos perferendis numquam, non sequi
              iure officia, a eligendi. Assumenda hic aspernatur aliquid alias
              sed facilis exercitationem quos nesciunt ab illum. Perferendis.
              Rerum optio nesciunt vero eos, illum commodi possimus placeat.
              Saepe a possimus nulla vel rerum aspernatur maxime labore commodi
              quasi delectus quod dolorum, ut quaerat officia quisquam
              consequatur odit ad? Quibusdam, dicta? Neque, quia? Pariatur sunt
              alias id rerum adipisci iste laboriosam nihil est? Minus hic
              exercitationem temporibus doloribus similique, vitae consequatur
              ea eum tempore vel, ipsa aliquam nobis fuga. Accusamus aliquid
              minus quos adipisci nam ex harum assumenda molestias atque
              consectetur, voluptates voluptatum obcaecati hic illo deserunt
              aspernatur repellendus modi iste voluptas odit exercitationem
              temporibus magni enim sed. Facere! Odit incidunt blanditiis
              accusamus quas, nesciunt eius nobis exercitationem error
              voluptatibus cumque, sapiente labore corrupti tenetur dolorum ut?
              Minima magni a rem ab, ipsum alias itaque praesentium corrupti
              modi eos? Similique soluta eveniet debitis, nihil iusto
              architecto, labore eum doloribus blanditiis accusantium, quibusdam
              magni eius reprehenderit culpa adipisci animi ratione
              perspiciatis? Quod molestiae eveniet libero sit facilis natus
              dicta esse. Molestiae non similique amet, dolorum ex molestias
              culpa explicabo minus ad et exercitationem doloribus animi
              commodi, iure deserunt quos soluta iste suscipit ipsum dignissimos
              impedit totam dolorem atque? Iure, vitae? Repellendus dolore odit
              eligendi beatae cupiditate dolorem tempora ipsum quo maiores ea
              rerum sit veritatis, necessitatibus animi hic sint expedita
              reprehenderit tempore cum nobis omnis ipsa culpa magnam. Ratione,
              repellendus. Itaque sequi perferendis dolore dicta atque. Sunt
              reiciendis voluptatum quae earum, soluta similique! Quisquam,
              quibusdam. Ducimus, in dolor illum itaque, quaerat magni
              cupiditate omnis amet optio dicta aliquam eveniet saepe! Explicabo
              saepe quasi recusandae obcaecati maiores dolor aliquam voluptate
              nesciunt nemo tenetur molestias est repudiandae deleniti
              blanditiis voluptates sit, eum dignissimos praesentium assumenda
              nulla. Tenetur beatae nemo excepturi harum voluptas. Architecto
              accusamus rem amet quaerat iste, excepturi ab reprehenderit
              repellendus est explicabo corrupti iure quibusdam ipsam quis
              consectetur natus distinctio doloremque eaque ut inventore! Vitae
              debitis sit asperiores eum repellendus? Enim soluta dolore
              consequuntur doloremque deserunt, praesentium natus. Ad modi
              similique culpa ducimus, quam voluptates est quidem iste nam
              ipsam. Nulla blanditiis quasi incidunt fugiat tempore, quas autem
              aperiam minima! Qui nisi possimus quos, ipsum, hic rem repudiandae
              beatae a vitae, cupiditate esse aperiam dicta. Dolores eius
              minima, libero distinctio, mollitia nulla voluptatem repellendus
              qui itaque praesentium voluptate reprehenderit quisquam! Impedit
              fuga quidem consequuntur reprehenderit iste incidunt facere
              exercitationem est pariatur inventore veniam quia repellat ab
              harum nihil sapiente ducimus suscipit necessitatibus, velit hic at
              esse! Natus eos itaque quos. Distinctio reiciendis itaque soluta
              ratione optio perferendis molestiae fugit doloremque omnis dolore,
              aperiam, dicta aliquid officia saepe cum pariatur laboriosam,
              expedita dolor voluptatem voluptate quibusdam. Dignissimos quas
              illum accusamus laborum? Animi ea commodi dolores quam dolore
              aspernatur, obcaecati quasi itaque deleniti similique officiis
              recusandae perspiciatis iusto blanditiis totam, molestias incidunt
              praesentium! Minus, praesentium placeat magnam veritatis animi
              cumque consequuntur unde! Dignissimos consequatur ipsa enim
              repellendus atque fugiat culpa dolore ducimus. Maxime quae
              deleniti qui neque repellendus impedit aspernatur reiciendis.
              Quam, nobis eaque! Animi ullam, sed tenetur laudantium hic
              delectus alias! In, quam? Explicabo alias numquam dolor delectus
              ipsa sed, sapiente dolorem atque velit quas cupiditate excepturi
              neque doloremque eaque ad nostrum aliquid, asperiores accusantium
              quaerat. Corrupti itaque quasi nesciunt odio! Maxime officiis
              rerum illo illum. Animi fuga laboriosam tempora eaque enim error
              inventore praesentium eius nam rem, deserunt fugit commodi unde
              accusamus quisquam ipsum labore. Esse dolore illo exercitationem
              autem! Sapiente possimus debitis ex repellendus incidunt
              reiciendis deleniti laborum quos quasi eaque adipisci iusto,
              praesentium, est unde. Beatae deserunt ipsa totam quae veniam
              labore culpa nulla consequuntur hic debitis. Aliquam. Sed
              voluptatem exercitationem, corporis odit, omnis minus saepe a
              consequuntur magnam fuga officiis dolor quam. Nam, adipisci
              sapiente. Delectus, corporis sint. Quidem, error. Distinctio
              eveniet harum, totam repudiandae a ipsam. Facilis autem laboriosam
              fugiat laborum error et? Aut molestias iusto magnam numquam saepe
              id, doloremque animi a aliquid. Cupiditate vel blanditiis,
              nesciunt odit ab quasi ratione iusto sit doloribus est. Cum fugiat
              expedita dolorem neque obcaecati magni ratione perspiciatis
              voluptatum eius repellendus qui necessitatibus quod eveniet
              nesciunt aliquid autem molestias, minima suscipit amet placeat
              dicta totam rem? Reiciendis, illo nesciunt. Odit ut quo ipsam
              voluptatem accusantium voluptatum facilis, voluptatibus amet
              corrupti sit rem fuga quidem sint exercitationem! Culpa nobis
              illum id aperiam et quisquam sed delectus! Ipsum atque saepe odit.
              Aliquam sunt, facere labore numquam, consequatur placeat
              consectetur incidunt vero quod porro deleniti illum voluptatibus
              eius culpa totam alias itaque aspernatur, quidem deserunt non
              reprehenderit. Eum maxime in quo quia? Quis fugiat exercitationem
              totam nesciunt at minus fuga iusto facere saepe amet blanditiis,
              labore doloribus facilis quaerat quas, dolore aliquam recusandae
              ducimus ut tempore ipsa aut? Eum aliquid excepturi magnam? Ipsam
              distinctio enim eos ea ipsum inventore! Ipsam inventore molestias
              et eaque. Odit impedit, sint natus praesentium nesciunt
              consequuntur ab. Minima aspernatur molestiae, omnis similique
              architecto error quod deserunt exercitationem! Deserunt inventore
              officia omnis, qui tenetur totam quod itaque cupiditate
              voluptatibus unde sunt sint recusandae. Dignissimos laboriosam ab,
              voluptatum vitae animi soluta iusto mollitia ipsa natus doloremque
              accusantium repudiandae quas? Nisi aliquam molestiae, qui rem amet
              ab tenetur et harum unde libero iste dolorem tempore temporibus
              aut reiciendis quasi architecto exercitationem recusandae dolore
              possimus pariatur. Facilis dolores mollitia dolor rerum. Mollitia
              dolor aperiam aliquam minus rem sequi ex deleniti consequuntur
              quisquam vero id veniam inventore, fuga fugit accusamus excepturi.
              Asperiores enim, modi voluptatem deserunt natus officia ea
              provident accusantium maiores. Nobis totam, expedita nam, fuga
              exercitationem quis, facere alias illum dicta quasi perspiciatis
              temporibus dolorum adipisci accusamus eaque earum nulla dolorem
              animi hic repellat mollitia tempora sint. Earum, qui iusto.
              Praesentium reiciendis iste tenetur ab magni, amet, dolores libero
              ducimus est eius dignissimos inventore facere consequatur
              reprehenderit fugit. Sunt totam amet debitis, laborum pariatur
              quam eos perferendis quos mollitia nostrum. Ducimus libero autem
              enim modi sunt earum nemo quae aperiam at voluptatem magnam
              dignissimos deserunt rerum magni, unde tenetur laudantium quaerat
              sit soluta itaque aliquid reiciendis corrupti iste assumenda.
              Tempora. Enim neque mollitia explicabo reiciendis. Sed, quam
              quidem vitae odit architecto at numquam a, quos fuga aliquam
              sapiente id aliquid vero iusto mollitia eum cum inventore et
              impedit. Iusto, laborum. Voluptatum modi consequuntur molestiae
              adipisci officia rerum incidunt esse porro eveniet voluptas
              facilis at neque deserunt, et ducimus doloribus voluptate
              temporibus nihil cupiditate quasi aut in quo facere. At, sint!
              Mollitia vero nisi voluptates. Mollitia ipsum molestiae deleniti
              rem illum neque ab quisquam nisi. Sequi impedit ea tenetur
              repellat. Ad, magnam! Corrupti quisquam ratione totam laudantium
              deleniti facere omnis laborum. Officia architecto dolores ratione
              commodi magnam? Mollitia, iure fugiat? Ut, placeat? Voluptatibus,
              asperiores nemo blanditiis aperiam at, possimus cum, doloribus
              dignissimos ipsa sit atque quisquam cumque repudiandae nam sint
              iste? Beatae placeat nam exercitationem ex quae autem eos veniam
              optio ad dolor cupiditate, sequi accusamus laborum quisquam!
              Blanditiis, cumque ad odio dolore quis vitae velit voluptate
              consectetur at praesentium ipsum! Unde quidem nisi expedita dicta
              facilis ipsam, cupiditate delectus similique? Eos enim eaque nulla
              sint soluta ullam vero, dolor obcaecati cum nostrum voluptates, ex
              aspernatur aliquid doloremque non aperiam delectus? Pariatur non
              porro saepe! Voluptas vel ullam nulla saepe repellat vero earum
              molestias. Suscipit aliquam fugiat laudantium molestiae totam. Qui
              voluptate quae excepturi minus dignissimos esse perspiciatis
              libero quas hic. Incidunt cum doloribus sint, temporibus debitis,
              ipsum laudantium mollitia facilis iure ipsam consequatur fugit
              architecto deserunt? Asperiores ex vel qui velit illo nisi? Hic
              consectetur dolorem vitae dolorum soluta voluptates. Eum nobis
              dolor esse, aperiam incidunt blanditiis distinctio quasi aliquid
              atque, ut enim. Non quo doloribus veritatis optio, fuga id ipsam
              saepe culpa architecto, eligendi cum nisi odio qui voluptatum. Ut
              minus qui vitae facilis temporibus. Tempore quibusdam consequuntur
              libero omnis labore accusamus culpa fugit esse unde. Quae deleniti
              neque voluptas, ipsum facere animi, facilis impedit aliquam ipsam
              vero eius. Inventore rem quasi tenetur repellendus blanditiis
              explicabo a, sequi illo molestias non vero quam, aperiam
              distinctio officia aut! Temporibus cumque est repudiandae quia non
              error dolorum, minima libero eligendi? Placeat. Maxime est illum
              possimus illo ab odit ipsa pariatur, hic sed vero dolore excepturi
              eveniet aliquam culpa expedita soluta quaerat fuga ea voluptatem
              consectetur. Rem recusandae cumque omnis consequuntur delectus!
              Nulla dicta debitis enim optio voluptate tempora ducimus magnam?
              Fugit atque delectus commodi, quisquam saepe at fugiat? Quam
              incidunt libero exercitationem et ab voluptates nemo, alias magni
              non pariatur. Placeat? Maxime minus atque in minima quod officia
              nobis alias obcaecati dicta. Incidunt iusto, blanditiis eum,
              magnam quasi accusantium nesciunt libero veritatis beatae veniam
              quaerat fugiat modi consequatur qui voluptas officiis? Accusantium
              et, corrupti modi enim magni, voluptates fuga temporibus placeat,
              quod nulla quasi dignissimos aliquid exercitationem quas
              accusamus? Cum nemo minus dicta. Modi ipsam error quia tenetur
              praesentium provident impedit! In, quasi rem? Quibusdam fugit
              ullam aut blanditiis aliquam nulla dignissimos, sapiente culpa
              officiis cum eius voluptatem consectetur quia odit suscipit labore
              illum provident doloribus in explicabo porro veritatis! Quod. Ea
              in nihil explicabo error eaque inventore aperiam, sequi
              voluptates. Qui ipsam explicabo pariatur placeat vel iusto quos
              delectus ad velit nulla deserunt iure ducimus labore a officiis,
              magni unde. Unde enim eum, ut nisi neque animi quis optio quos?
              Quam eum vel dolore quisquam deserunt rem sed ratione asperiores
              dicta neque esse, aliquid itaque culpa voluptatem illum enim sint.
            </Text>
          </View>
        </View>
      </ScrollView>
    </Layout.ThemedView>
  );
};

export default memo(HomeTabScreen);
