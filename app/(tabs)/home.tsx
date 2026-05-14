// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Dimensions,
//   Platform,
// } from 'react-native';
// import { Feather } from '@expo/vector-icons';

// const { width } = Dimensions.get('window');

// // Données pour le graphique
// const pieData = [
//   { label: 'Taxi Driver', percentage: 20, color: '#1D8C9C' },
//   { label: 'Teacher', percentage: 20, color: '#7CD4E4' },
//   { label: 'Farmer', percentage: 60, color: '#FFB347' },
// ];

// export default function HomeHabitantScreen() {
//   return (
//     <View style={styles.container}>
//       <ScrollView 
//         contentContainerStyle={styles.scrollContainer}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* En-tête */}
//         <View style={styles.header}>
//           <Text style={styles.title}>Census</Text>
//         </View>

//         {/* Cartes de localisation */}
//         <View style={styles.locationCards}>
//           <View style={styles.locationCard}>
//             <Feather name="home" size={24} color="#1D8C9C" />
//             <Text style={styles.locationLabel}>Village</Text>
//             <Text style={styles.locationValue}>Mvog-Mbi</Text>
//           </View>
          
//           <View style={styles.locationCard}>
//             <Feather name="map-pin" size={24} color="#1D8C9C" />
//             <Text style={styles.locationLabel}>Neighborhood</Text>
//             <Text style={styles.locationValue}>Bastos</Text>
//           </View>
          
//           <View style={styles.locationCard}>
//             <Feather name="navigation" size={24} color="#1D8C9C" />
//             <Text style={styles.locationLabel}>Zone</Text>
//             <Text style={styles.locationValue}>Zone A</Text>
//           </View>
//         </View>

//         {/* Indicateur principal */}
//         <View style={styles.mainIndicator}>
//           <Text style={styles.indicatorTitle}>Main Indicator</Text>
//           <View style={styles.indicatorStats}>
//             <View style={styles.statItem}>
//               <Text style={styles.statNumber}>1290</Text>
//               <Text style={styles.statLabel}>Men</Text>
//             </View>
//             <View style={styles.statDivider} />
//             <View style={styles.statItem}>
//               <Text style={styles.statNumber}>1290</Text>
//               <Text style={styles.statLabel}>Women</Text>
//             </View>
//           </View>
//         </View>

//         {/* Distribution */}
//         <View style={styles.distributionContainer}>
//           <Text style={styles.distributionTitle}>
//             Distribution of population by selected parameter
//           </Text>
          
//           {/* Graphique à barres */}
//           <View style={styles.chartContainer}>
//             {pieData.map((item, index) => (
//               <View key={index} style={styles.barItem}>
//                 <View style={styles.barHeader}>
//                   <Text style={styles.barLabel}>{item.label}</Text>
//                   <Text style={styles.barPercentage}>{item.percentage}%</Text>
//                 </View>
//                 <View style={styles.barBackground}>
//                   <View 
//                     style={[
//                       styles.barFill, 
//                       { 
//                         width: `${item.percentage}%`,
//                         backgroundColor: item.color 
//                       }
//                     ]} 
//                   />
//                 </View>
//               </View>
//             ))}
//           </View>
//         </View>
//       </ScrollView>

//       {/* Barre de navigation inférieure */}
//       <View style={styles.bottomNav}>
//         <TouchableOpacity style={styles.navItem}>
//           <Feather name="home" size={24} color="#1D8C9C" />
//           <Text style={[styles.navText, styles.navTextActive]}>Home</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity style={styles.navItem}>
//           <Feather name="file-text" size={24} color="#999" />
//           <Text style={styles.navText}>Form</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity style={styles.navItem}>
//           <Feather name="send" size={24} color="#999" />
//           <Text style={styles.navText}>Send</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity style={styles.navItem}>
//           <Feather name="settings" size={24} color="#999" />
//           <Text style={styles.navText}>Settings</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF8F8',
//   },
//   scrollContainer: {
//     paddingBottom: 80,
//   },
//   header: {
//     paddingHorizontal: 20,
//     paddingTop: 50,
//     paddingBottom: 20,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#1D8C9C',
//   },
//   locationCards: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 15,
//     marginBottom: 25,
//   },
//   locationCard: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 15,
//     padding: 12,
//     marginHorizontal: 5,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     elevation: 2,
//     borderWidth: 1,
//     borderColor: '#7CD4E4',
//   },
//   locationLabel: {
//     fontSize: 12,
//     color: '#999',
//     marginTop: 8,
//     marginBottom: 4,
//   },
//   locationValue: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#1D8C9C',
//   },
//   mainIndicator: {
//     backgroundColor: '#FFFFFF',
//     marginHorizontal: 15,
//     borderRadius: 20,
//     padding: 20,
//     marginBottom: 25,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     elevation: 2,
//     borderWidth: 1,
//     borderColor: '#7CD4E4',
//   },
//   indicatorTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#1D8C9C',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   indicatorStats: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   statItem: {
//     alignItems: 'center',
//     flex: 1,
//   },
//   statNumber: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: '#1D8C9C',
//   },
//   statLabel: {
//     fontSize: 16,
//     color: '#666',
//     marginTop: 5,
//   },
//   statDivider: {
//     width: 1,
//     height: 40,
//     backgroundColor: '#7CD4E4',
//   },
//   distributionContainer: {
//     marginHorizontal: 15,
//     marginBottom: 20,
//   },
//   distributionTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   chartContainer: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 20,
//     padding: 20,
//     borderWidth: 1,
//     borderColor: '#7CD4E4',
//   },
//   barItem: {
//     marginBottom: 15,
//   },
//   barHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 6,
//   },
//   barLabel: {
//     fontSize: 14,
//     color: '#555',
//   },
//   barPercentage: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#1D8C9C',
//   },
//   barBackground: {
//     height: 10,
//     backgroundColor: '#F0F0F0',
//     borderRadius: 5,
//     overflow: 'hidden',
//   },
//   barFill: {
//     height: '100%',
//     borderRadius: 5,
//   },
//   bottomNav: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     flexDirection: 'row',
//     backgroundColor: '#FFFFFF',
//     paddingVertical: 12,
//     paddingBottom: Platform.OS === 'ios' ? 30 : 12,
//     borderTopWidth: 1,
//     borderTopColor: '#EEEEEE',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   navItem: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   navText: {
//     fontSize: 11,
//     color: '#999',
//     marginTop: 4,
//   },
//   navTextActive: {
//     color: '#1D8C9C',
//     fontWeight: '600',
//   },
// });




import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

const { width } = Dimensions.get('window');

// Données pour le graphique
const pieData = [
  { label: 'Taxi Driver', percentage: 20, color: '#1D8C9C' },
  { label: 'Teacher', percentage: 20, color: '#7CD4E4' },
  { label: 'Farmer', percentage: 60, color: '#FFB347' },
];

export default function HomeHabitantScreen() {
  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* En-tête avec Avatar */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello,</Text>
            <Text style={styles.userName}>John Doe</Text>
          </View>
          <View style={styles.avatarContainer}>
            <Image 
              source={require('../../assets/images/logo1.png')} 
              style={styles.avatar}
              defaultSource={require('../../assets/images/logo1.png')}
            />
          </View>
        </View>

        {/* Cartes de localisation */}
        <View style={styles.locationCards}>
          <View style={styles.locationCard}>
            <Feather name="home" size={24} color="#1D8C9C" />
            <Text style={styles.locationLabel}>Village</Text>
            <Text style={styles.locationValue}>Mvog-Mbi</Text>
          </View>
          
          <View style={styles.locationCard}>
            <Feather name="map-pin" size={24} color="#1D8C9C" />
            <Text style={styles.locationLabel}>Neighborhood</Text>
            <Text style={styles.locationValue}>Bastos</Text>
          </View>
          
          <View style={styles.locationCard}>
            <Feather name="navigation" size={24} color="#1D8C9C" />
            <Text style={styles.locationLabel}>Zone</Text>
            <Text style={styles.locationValue}>Zone A</Text>
          </View>
        </View>

        {/* Indicateur principal */}
        <View style={styles.mainIndicator}>
          <Text style={styles.indicatorTitle}>Main Indicator</Text>
          <View style={styles.indicatorStats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1290</Text>
              <Text style={styles.statLabel}>Men</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1290</Text>
              <Text style={styles.statLabel}>Women</Text>
            </View>
          </View>
        </View>

        {/* Distribution */}
        <View style={styles.distributionContainer}>
          <Text style={styles.distributionTitle}>
            Distribution of population by selected parameter
          </Text>
          
          {/* Graphique à barres */}
          <View style={styles.chartContainer}>
            {pieData.map((item, index) => (
              <View key={index} style={styles.barItem}>
                <View style={styles.barHeader}>
                  <Text style={styles.barLabel}>{item.label}</Text>
                  <Text style={styles.barPercentage}>{item.percentage}%</Text>
                </View>
                <View style={styles.barBackground}>
                  <View 
                    style={[
                      styles.barFill, 
                      { 
                        width: `${item.percentage}%`,
                        backgroundColor: item.color 
                      }
                    ]} 
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F8',
  },
  scrollContainer: {
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 14,
    color: '#999',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1D8C9C',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#7CD4E4',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  locationCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  locationCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 12,
    marginHorizontal: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#7CD4E4',
  },
  locationLabel: {
    fontSize: 12,
    color: '#999',
    marginTop: 8,
    marginBottom: 4,
  },
  locationValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1D8C9C',
  },
  mainIndicator: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#7CD4E4',
  },
  indicatorTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1D8C9C',
    textAlign: 'center',
    marginBottom: 20,
  },
  indicatorStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1D8C9C',
  },
  statLabel: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#7CD4E4',
  },
  distributionContainer: {
    marginBottom: 20,
  },
  distributionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  chartContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#7CD4E4',
  },
  barItem: {
    marginBottom: 15,
  },
  barHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  barLabel: {
    fontSize: 14,
    color: '#555',
  },
  barPercentage: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1D8C9C',
  },
  barBackground: {
    height: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 5,
  },
});