$(document).ready(function() {
    const thumbnails = new Array("https://i.picsum.photos/id/367/100/100.jpg?hmac=D9l9zWywnyyYt6SnlQF_qs3zwpmnXbr-t3egxa2IkZo",
                                    "https://i.picsum.photos/id/758/100/100.jpg?hmac=YUrSCh-rRhpJ1mD-49buwI-M0cS7Dwqa8-t4lM_5icI", 
                                    "https://i.picsum.photos/id/1037/100/100.jpg?hmac=vEFAUh0emnBqXwcwILARYJpgQb1JyiCH8YAPochrQ3U",
                                    "https://i.picsum.photos/id/57/100/100.jpg?hmac=iRscNT7V5bAljNI0m4foxHcYRt5G8L6xvSAYVSOMi0A",
                                    "https://i.picsum.photos/id/886/100/100.jpg?hmac=3qMyFA4HswT2fBL4eqH98wc4KQjuymWDMzMl7TdZyBY",
                                    "https://i.picsum.photos/id/553/100/100.jpg?hmac=gxPoxmVtHas0fFcPxyAuKFMlvSjERMhY6lJ6uRGkZls",
                                    "https://i.picsum.photos/id/515/100/100.jpg?hmac=7oxlyqTVoy5TXNV4qpYFgYAl0G_YtrGxaVRhyDYZQPM",
                                    "https://i.picsum.photos/id/362/100/100.jpg?hmac=J4zI1HNTRxGckd8cHMjc3FtIuTHe61ePjRFQKImDDX4",
                                    "https://i.picsum.photos/id/738/100/100.jpg?hmac=sTkbEAmPqiPvrXIFIGUQ0mFz46Z5ZsW7sz_rUkPlzKE",
                                    "https://i.picsum.photos/id/215/100/100.jpg?hmac=zD_kO1PO6EfGfhi0hENI1bK0GGJG0DG_Xpu4SRzK2MU",
                                    "https://i.picsum.photos/id/203/100/100.jpg?hmac=7UcR5YCixpDxXuPyrCN1UbZPU9-HlBY_Emujoje6inw",
                                    "https://i.picsum.photos/id/119/100/100.jpg?hmac=2coVQFsbwEKdE1gihGw2afU8pdlyS2Pk9HCcaI40nfg");

    const pictures = new Array("https://i.picsum.photos/id/367/4928/3264.jpg?hmac=H-2OwMlcYm0a--Jd2qaZkXgFZFRxYyGrkrYjupP8Sro",
                                "https://i.picsum.photos/id/758/3648/5472.jpg?hmac=4FrxDiwdAcHbSbwCapdcYxTB5Dtp4B64ieH-SKGN5mU",
                                "https://i.picsum.photos/id/1037/5760/3840.jpg?hmac=fZe213BcO2KPQEJKChsdHnVYg-6kAtQMTZV24f1fS94",
                                "https://i.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ",
                                "https://i.picsum.photos/id/886/3264/2448.jpg?hmac=_LARZmhG59Yi7rDFclI2Nr3Zezzi3mISp6XNiZsgzIE",
                                "https://i.picsum.photos/id/553/4288/2848.jpg?hmac=GFwL-rqthwP4zWlMpIz4JfwsyEKeXh2MTBhQoV7hPT8",
                                "https://i.picsum.photos/id/515/4585/3439.jpg?hmac=WSSTufs9yyQUM8j16-DUr6nfucMBKIw7XHyMruISqeQ",
                                "https://i.picsum.photos/id/362/4438/2954.jpg?hmac=SaEsgFrZIK1IM_SZgrf-3ySjRErJmLRfKbbTmrL1Gi0",
                                "https://i.picsum.photos/id/738/2005/3000.jpg?hmac=erOLIQYMt45RfHBKztDFaLYDg_dmDNIhb5sQJF6wnTI",
                                "https://i.picsum.photos/id/215/3264/2448.jpg?hmac=u-g_DAEnfO1tx6Y9o80X1qzqC7rpmPHJ94JhqVa8SCI",
                                "https://i.picsum.photos/id/203/4032/3024.jpg?hmac=yeLnHOEAWUYBtMnanR0-0Q7gSvYbyxPG3PLJYvm170Q",
                                "https://i.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU")

    for(var i=0; i<thumbnails.length; i++) {
        var image = $("<img>").attr("src", thumbnails[i]).addClass("img-thumbnail mt-1").attr("data-id", i);
        $(".card-body").append(image);
        image.css("cursor", "pointer");
    }
    /*do klasy dodane click*/
    $(".img-thumbnail").click(function() {
        $("#big-pic").attr("src","");
        var id = $(this).data('id')
        $("#big-pic").attr("src", pictures[id]);
        $('#exampleModal').modal('show');
    });
});