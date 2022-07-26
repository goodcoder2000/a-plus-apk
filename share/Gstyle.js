import { StyleSheet } from "react-native";

export const Gstyles = StyleSheet.create({
    HomeContainer: {
        flex: 1,
        backgroundColor: "#lightgray",
        position: 'relative'
    },
    HomeHeaderText: {
        fontSize: 23,
        fontFamily: "poppins-b"
    },
    firstText: {
        color: "#FE9D34"
    },
    secondText : {
        color: "#102A68"
    },
    foodtext: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "bold"
    },
    FoodCategoryContainer: {
        backgroundColor: '#fff',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    ImageIcon: {
        width: 110,
        height: 155,
    },
    IconImageContainer: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        backgroundColor: 'blue',
        overflow: 'hidden'
    },
    IconTitleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    IconTitle: {
        textAlign: "center",
        fontSize: 15
        // fontWeight: 'bold'
    },
    categoryBody: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    Image: {
        width: "100%",
        height: "100%"
    },
    ProfileContainer: {
        width: "97%",
        padding: 10,
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#fff",
        borderRadius: 10
    },
    profiletitle: {
        fontSize: 22,
        fontFamily: "poppins-b"
    },
    profileText: {
        fontSize: 20,
        fontFamily: "poppins-r"
    },
    userData: {
        color: "#FE9D34"
    },
    avator: {
        width: 70,
        height: 70,
        backgroundColor: "#FE9D34",
        borderRadius: 100,
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 15,
        marginLeft: "auto",
        marginRight: "auto"
    },
    shopHeader: {
        fontSize: 20,
        padding: 10
    },
    shopListContainer: {
        flex: 1,
        marginTop: 10,
    },
    EachShopContainer: {
        height: 120,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginTop: 6,
        marginBottom: 6,
        marginHorizontal: 8,
        flexDirection: 'row',
        
    },
    box: {
        shadowColor: '#333',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
    },
    EachShopImageContainer: {
        width: 100,
        height: 100,
        backgroundColor: "lightgray"
    },
    EachShopTextCon: {
        marginLeft: 15,
    },
    ESSName: {
        fontSize: 20,
        fontWeight: "bold"
    },
    Inshoptitle: {
        fontSize: 25,
        fontFamily: 'poppins-b',
        padding: 10,
        color: '#FF5621'
    },
    menuheader: {
        fontSize: 23,
        padding: 10,
        fontFamily: 'poppins-r'
    },
    Menucontainer: {

    },
    EachMenu: {
        backgroundColor: "#fff",
        marginBottom: 7,
        borderRadius: 8,
        flexDirection: 'row',
        padding: 10,
        marginHorizontal: 8
    },
    MenuDetails: {
        paddingTop: 10,
        paddingLeft: 20
    },
    Menufname: {
        fontSize: 20,
        fontFamily: 'poppins-b'
    },
    MenuPrice: {
        fontFamily: 'poppins-r',
        color: '#FF5621'
    },
    addIcon: {
        position: 'absolute',
        right: 25,
        bottom: 25
    },
    inshopContainer: {
        flex: 1,
    },
    backIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 30,
        left: 20
    },
    FoodDetails: {
        flex: 1,
    },
    detailsImage: {
        marginTop: 90,
        width: '100%',
        height: 300,
    },
    DFName: {
        fontSize: 25,
        fontFamily: 'poppins-b'
    },
    DFprice: {
        fontSize: 23,
        fontFamily: 'poppins-r'
    },
    addOrRemoveContainer: {
        width: '100%',
        height: 350,
        backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
    },
    addorRemove: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        width: 100,
        borderRadius: 30,
    },
    count: {
        fontSize: 20,
        fontFamily: 'poppins-b'
    },
    detailsUpper: {
        paddingTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    detailsLowercon: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 17
    },
    noteContainer: {
        padding: 10,
    },
    CustomButton: {
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    CustomButtonTitle:{
        // fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'poppins-b',
        marginRight: 7
    },
    detailPrice: {
        fontSize: 20,
        fontFamily: 'poppins-b'
    },
    totalD: {
        color: '#FF5621'
    },
    deliPrice: {
        color: '#FF5621'
    },
    EachCartItem: {
        width: '100%',
        height: 120,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 10,
        marginBottom: 10
    },
    CartItemLeft: {
        width: 170,
        padding: 20
    },
    CartItemRight: {
        width: 140,
        height: 140,
    },
    CartContainer: {
        paddingHorizontal: 10,
    },
    CartItemText: {
        fontFamily: 'poppins-b',
        fontSize: 16,
    },
    checkboxCon: {
        paddingHorizontal: 20,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    marginFor: {
        marginTop: 10
    },
    OrderContainer: {
        width: '100%',
        height: 100,
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 70
       },
    ImageSliderCon: {
        width: '100%',
        height: 170,
        backgroundColor: "#333",
        marginTop: 20,
        marginBottom: 10
    },
    phoneNo: {
        borderWidth: 1,
        padding: 10,
        fontFamily: 'poppins-r',
        fontSize: 15,
        marginBottom: 20,
        borderRadius: 8,
        color: "#fff",
        backgroundColor: 'rgba(51,51,51,0.6)'
    },
    selectQuarter: {
        backgroundColor: 'rgba(51,51,51,0.6)',
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    selectQuarterText: {
        fontFamily: 'poppins-r',
        fontSize: 15,
        color: "#fff",
    },
    loginCon: {
        paddingHorizontal: 10,
        flex: 1,
        marginTop: 30        
    },
    totalText: {
        color: "#FE9D34",
        fontSize: 15,
        fontFamily: "poppins-b"
    },
    checkbox: {
        padding: 10
    },
    quarterModal: {
        flex: 1,
        backgroundColor: 'lightgray'
    },
    EachQuarter: {
        backgroundColor: '#fff',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 10
    },
    EachQuarterText: {
        padding: 10,
        fontSize: 18,
    },
    modelTitle: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    orderSuccessMessageContainer: {
        position: "absolute",
        left: 0,
        right: 0
    },
    OrderSuccessitem: {
        flex: 1
    },
    EachOrdered: {
        marginTop: 5,
        marginBottom: 5,
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    EachOrderedImage: {
        width: 60,
        height: 60
    },
    textStyle: {
        fontStyle: "italic"
    },
    settingCon: {
        padding: 10
    }
})