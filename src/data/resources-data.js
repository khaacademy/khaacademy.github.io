const RESOURCES_DATA = [
    {
        header: {
            name: 'Learning',
            tag: 'learning',
            desc: `These websites are good for relearning concepts. 
            For example, if you forgot how solids of revolution work, go here instead of a practice test. 
            Don't use these websites for competition problems though, just relearning.`
        },
        bits: [
            {
                name: 'Paul\'s Math Notes',
                href: 'http://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx',
                desc: `Awesome website for learning calculus. 
                It is straight to the point. 
                It gives you notes on a topic, then gives you practice problems on that topic. 
                You can solve them in any order and view the solutions whenever. 
                Also, Paul's Math Notes have some cheat sheets for those interested.`
            },
            {
                name: 'Khan Academy',
                href: 'https://www.khanacademy.org/math/ap-calculus-ab',
                desc: `My sister website. 
                Khan Academy is another good website for calculus material, with videos as its strong point. 
                It also aligns with the AP curriculum.`
            },
            {
                name: 'PatrickJMT',
                href: 'http://patrickjmt.com/#calculus',
                desc: `Youtube videos for if you are having a problem with a specific concept.`
            },
        ]
    },
    {
        header: {
            name: 'Local Level MAΘ Tests',
            tag: 'locals',
            desc: `Practice tests from websites that mimic the difficulty of a local/state-level test.`
        },
        bits: [
            {
                name: 'ACTM',
                href: 'http://uca.edu/actm/regional-contest-archive/',
                desc: `Very similar questions to local tournaments, with an occasional obscure topic here and there.`
            },
            {
                name: 'LaMAΘ',
                href: 'http://www.lamao.org/Public/Tests?Year=2012',
                desc: `Louisiana's official Mu Alpha Theta website. They have some tests available, but unfortunately some are missing (you can find some of them on our site).`
            },
            {
                name: 'Collection of Differential Calculus Problems',
                href: 'http://faculty.ung.edu/jallagan/Courses%20materials/Math%201450%20Calculus%201/Syllabus%20and%20ebook/problems%20and%20solutions%20for%20calculus%201.pdf',
                desc: `Problems given at Simon Fraser University sorted by category.`
            }
        ]
    },
    {
        header: {
            name: 'National Level MAΘ Tests',
            tag: 'nationals',
            desc: `These sites are for if you are feeling ambitious. They are difficult!`
        },
        bits: [
            {
                name: 'MAΘ',
                href: 'https://www.mualphatheta.org/past_tests',
                desc: `Mu Alpha Theta's official page. They have tests from National Convention, a national-level tournament.`
            },
            {
                name: 'FAMAT',
                href: 'https://floridamao.org/FAMATSite/PublicPages/TestArchive.aspx',
                desc: `Florida's official Mu Alpha Theta website. Their state tests are ironically harder than the national level tests. (Florida has very strong Mu Alpha Theta teams...)`
            },
            {
                name: 'Columbia',
                href: 'https://math.columbusstate.edu/tournament/previous_calculus_contest.php',
                desc: `Columbus State University's website. They have an invitational mathematics tournament with some pretty tough problems.`
            }
        ]
    },
    {
        header: {
            name: 'Miscellaneous Resources',
            tag: 'misc',
            desc: `Anything else goes here!`
        },
        bits: [
            {
                name: 'Derivative / Integral Cheat Sheet', 
                href: 'https://math.boisestate.edu/~shariultman/teaching/basic_derivatives_&_integrals_II.pdf', 
                desc: `These are common derivatives and integrals you may find in a tournament setting.`
            },
            {
                name: 'Common Calculus Mistakes', 
                href: 'https://calculus.nipissingu.ca/mistakes.html', 
                desc: `Common calculus mistakes that students make.`
            },
            {
                name: 'Last Minute Tips', 
                href: 'tests/last_minute_tips.pdf', 
                desc: `Here are common mistakes and other stuff that I noticed personally from my own tournament experience.`
            },
            {
                name: 'MathIM Lobby', 
                href: 'https://mathim.com/', 
                desc: `Want to have a math training session with your friends online? MathIM is a chatroom that supports rendered math text.`
            },
            {
                name: 'Polar Graph Sheet', 
                href: 'tests/polar_review.pdf', 
                desc: `For those of you doing Pre-Calculus or Calculus II, here is that one sheet Mr. Hernandez gave us a long time ago. It reviews the common polar graphs. I've really grown fond of this page.`
            },
            {
                name: 'Desmos', 
                href: 'https://www.desmos.com/', 
                desc: `Really good for graphing math. You can use it to check answers for your questions too!`
            }
        ]
    },
    {
        header: {
            name: 'Collegeboard AP Exam',
            tag: 'ap',
            desc: `This is not for Mu Alpha Theta, but for those prepping for the AP Calculus exam.`
        },
        bits: [
            {
                name: 'AP Calculus FRQs (2019-)', 
                href: 'https://apcentral.collegeboard.org/courses/ap-calculus-ab/exam', 
                desc: `Calculus free response questions. These are FRQ's after the 2019 AP Calculus reform. (You have to scroll down)`
            },
            {
                name: 'AP Calculus FRQs (1998-2018)', 
                href: 'https://apcentral.collegeboard.org/courses/ap-calculus-ab/exam/past-exam-questions', 
                desc: `Calculus free response questions. These are FRQ's before the 2019 AP Calculus reform.`
            },
            {
                name: 'AP Week Dates', 
                href: 'https://apcentral.collegeboard.org/courses/exam-dates-and-fees/exam-dates-2020', 
                desc: `Which exams are on which day? For reference, both Calculus AB and BC are on Tuesday, May 12, 2020.`
            },
            {
                name: 'AP Calculus Content Outline', 
                href: 'tests/ap/outline.pdf', 
                desc: `Content outline for both AP Calculus AB and BC.`
            },
            {
                name: 'AP Calculus Cheat Sheet', 
                href: 'tests/ap/apcalccheatsheet.pdf', 
                desc: `Cheat sheet for both AB and BC Calculus.`
            },
            {
                name: 'Calc BC Cheat Sheet', 
                href: 'tests/ap/bccram.pdf', 
                desc: `Cheat sheet specifically for BC students.`
            },
            {
                name: 'Calculus Study Guide', 
                href: 'tests/ap/apcalcsectionreview.pdf', 
                desc: `A study guide that covers material by sections.`
            }
        ]
    },
    {
        header: {
            name: 'AMC/AIME',
            tag: 'amc',
            desc: `This is not for Mu Alpha Theta, but for those interested here are resources for tackling the AMC/AIME. These are focused on problem-solving rather than knowledge/content. The four main topics are algebra, geometry, combinatorics, and number theory.`
        },
        bits: [
            {
                name: 'AoPS Wiki', 
                href: 'https://artofproblemsolving.com/wiki/', 
                desc: `A large math wiki full of resources!`
            },
            {
                name: 'AoPS Forums', 
                href: 'https://artofproblemsolving.com/community', 
                desc: `A forum for discussing math competition stuff!`
            },
            {
                name: 'AMC FAQs', 
                href: 'https://www.maa.org/math-competitions/faqs', 
                desc: `FAQs by the Mathematical Association of America (MAA).`
            },
            {
                name: 'How to Prepare', 
                href: 'https://artofproblemsolving.com/wiki/index.php/How_should_I_prepare%3F', 
                desc: `AoPS wikipage that gives good advice on how to prepare for the AMC.`
            },
            {
                name: 'AMC 12 Problems and Solutions', 
                href: 'https://artofproblemsolving.com/wiki/index.php?title=AMC_12_Problems_and_Solutions', 
                desc: `Your best resource for the AMC, past AMC tests!`
            },
            {
                name: 'Algebra Outline', 
                href: 'https://artofproblemsolving.com/wiki/index.php/Algebra/Intermediate', 
                desc: `List of intermediate algebra topics. Very good for AMC review.`
            },
            {
                name: 'Combinatorics Outline', 
                href: 'https://artofproblemsolving.com/wiki/index.php?title=Combinatorics/Introduction', 
                desc: `List of introductory combinatorics topics.`
            },
            {
                name: 'Number Theory Outline', 
                href: 'https://artofproblemsolving.com/wiki/index.php/Number_theory/Introduction', 
                desc: `List of introductory number theory topics.`
            },
            {
                name: 'AMC 12 Formulas', 
                href: 'https://www.tempeunion.org/cms/lib/AZ01901094/Centricity/Domain/520/AMC%2012%20Study%20Guide.pdf', 
                desc: `Has important identities and formulas that can be present on AMC.`
            },
            {
                name: 'AMC 12 Formulas #2', 
                href: 'https://services.artofproblemsolving.com/download.php?id=YXR0YWNobWVudHMvMi8wL2I2ZTRmOTdhNTRkMGEzODY2YjljNjQ2NWM5OWVkNjNlZDdhNzFhLnBkZg==&rn=Q29tcGV0aXRpb24gTWF0aCBGb3JtdWxhIFNoZWV0LnBkZg==', 
                desc: `A compilation of various formulas that are useful for competition math and AMC.`
            },
            {
                name: 'All of Math in Three Pages', 
                href: 'http://www.mandelbrot.org/resources/forms/indivtopics.pdf', 
                desc: `Content outline of "high school mathematics".`
            },
            {
                name: 'Coastal', 
                href: 'https://www.coastal.edu/math/mathcontest/tests/', 
                desc: `Coastal Carolina University's HS math contest. These problems are easier than the AMC, but are good for brushing up.`
            },
            {
                name: 'UI Math Contest', 
                href: 'https://faculty.math.illinois.edu/~hildebr/putnam/localcontestproblems.html', 
                desc: `Math Contest problems from University of Illinois!`
            },
            {
                name: 'Brilliant', 
                href: 'https://brilliant.org/wiki/wiki-guidelines/', 
                desc: `Their wiki pages are brilliant. For example, I really like their page on <a href="https://brilliant.org/wiki/vietas-formula/">Vieta's</a> and <a href="https://brilliant.org/wiki/telescoping-series-product/">Telescoping Series</a>.`
            },
            {
                name: 'David Altizio', 
                href: 'http://www.andrew.cmu.edu/user/daltizio/mathstuff.html', 
                desc: `Includes problem sets and really cool Math League handouts.`
            },
            {
                name: 'Contest Geometry', 
                href: 'http://www.geometer.org/mathcircles/geometry.pdf', 
                desc: `Contains important formulas and theorems from plane Euclidean geometry that are useful in math contests.`
            },
            {
                name: 'Nick\'s Math Puzzles', 
                href: 'http://www.qbyte.org/puzzles/', 
                desc: `Stimulate your brain with some math puzzles.`
            },
            {
                name: 'AMC 12 Breakdown', 
                href: 'https://artofproblemsolving.com/wiki/index.php/AMC_12', 
                desc: `Tells you how many questions, how much each question is worth, what is allowed on the test, the difficulty breakdown, etc.`
        
            },
            {
                name: 'AMC Historical Results', 
                href: 'https://amc-reg.maa.org/reports/generalreports.aspx', 
                desc: `See how your score compares to the national cutoff for the AIME.`
            },
            {
                name: 'AMC Statistics', 
                href: 'https://amc-reg.maa.org/reports/generalreports.aspx', 
                desc: `See how you compare with the rest of the nation.`
            }
        ]
    }
]

export default RESOURCES_DATA;